var CCCoinSale = artifacts.require('./CCCoinSale.sol');
var CCCoin = artifacts.require('./CCCoin.sol');

contract('CCCoinSale', accounts => {
  var coinInstance;
  var coinSaleInstance;
  var admin = accounts[0];
  var buyer = accounts[1];
  var coinPrice = 1000000000000000;
  var coinsAvailable = 750000;
  var numberOfCoins;
  it('initializes contract with correct values', () => {
      return CCCoinSale.deployed().then(instance => {
          coinSaleInstance = instance;
          return coinSaleInstance.address;
      }).then(address => {
          assert.notEqual(address, 0x0, 'has a contract address');
          return coinSaleInstance.coinContract();
      }).then(address => {
          assert.notEqual(address, 0x0, 'has a coin contract address')
          return coinSaleInstance.coinPrice();
      }).then(price => {
          assert.equal(price, coinPrice, 'coin price is correct');
      })
  })
  it('facilitates coin buying', function() {
      return CCCoin.deployed().then(function(instance) {
        // Grab coin instance first
        coinInstance = instance;
        return CCCoinSale.deployed();
      }).then(function(instance) {
        // Then grab coin sale instance
        CCCoinSaleInstance = instance;
        // Provision 75% of all coins to the coin sale
        return coinInstance.transfer(coinSaleInstance.address, coinsAvailable, { from: admin })
      }).then(function(receipt) {
        numberOfCoins = 10;
        return coinSaleInstance.buyCoins(numberOfCoins, { from: buyer, value: numberOfCoins * coinPrice })
      }).then(function(receipt) {
        assert.equal(receipt.logs.length, 1, 'triggers one event');
        assert.equal(receipt.logs[0].event, 'Sell', 'should be the "Sell" event');
        assert.equal(receipt.logs[0].args._buyer, buyer, 'logs the account that purchased the coins');
        assert.equal(receipt.logs[0].args._amount, numberOfCoins, 'logs the number of coins purchased');
        return coinSaleInstance.coinsSold();
      }).then(function(amount) {
        assert.equal(amount.toNumber(), numberOfCoins, 'increments the number of coins sold');
        return coinInstance.balanceOf(buyer);
      }).then(function(balance) {
        assert.equal(balance.toNumber(), numberOfCoins);
        return coinInstance.balanceOf(coinSaleInstance.address);
      }).then(function(balance) {
        assert.equal(balance.toNumber(), coinsAvailable - numberOfCoins);
        // Try to buy coins different from the ether value
        return coinSaleInstance.buyCoins(numberOfCoins, { from: buyer, value: 1 });
      }).then(assert.fail).catch(function(error) {
        assert(error.message.indexOf('revert') >= 0, 'msg.value must equal number of coins in wei');
        return coinSaleInstance.buyCoins(800000, { from: buyer, value: numberOfCoins * coinPrice })
      }).then(assert.fail).catch(function(error) {
        assert(error.message.indexOf('revert') >= 0, 'cannot purchase more coins than available');
      });
    });
    it('ends token sale', () => {
      return CCCoin.deployed().then(instance => {
        coinInstance = instance;
        return CCCoinSale.deployed()
      }).then(instance => {
        coinSaleInstance = instance          
        return coinSaleInstance.endSale({from:buyer});
      }).then(assert.fail).catch(error => {
        assert(error.message.indexOf('revert' >= 0, 'must be admin to end sale'));
        // end sale as admin
        return coinSaleInstance.endSale({from:admin});
      }).then(receipt => {
        return coinInstance.balanceOf(admin);
      }).then(balance => {
        assert.equal(balance.toNumber(), 999990, 'returns all unsold cccoins back to admin')
        balance = web3.eth.getBalance(coinSaleInstance.address);
        assert.equal(balance.toNumber(), 0);
      })
    })
})