var CCCoinSale = artifacts.require('./CCCoinSale.sol');

contract('CCCoinSale', accounts => {
    var coinSaleInstance;
    var coinPrice = 1000000000000000;
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
            assert.equal(price, coinPrice, 'token price is correct');
        })
    })
})