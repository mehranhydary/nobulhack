var CCCoin = artifacts.require("./CCCoin.sol");

contract("CCCoin", accounts => {
    var tokenInstance;
    it('initializes the contrac with the correct values', () => {
        return CCCoin.deployed().then(instance => {
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(name => {
            assert.equal(name, 'CC Coin', 'has the correct name');
            return tokenInstance.symbol();
        }).then(symbol => {
            assert.equal(symbol, 'CC', 'has the correct symbol');
            return tokenInstance.standard();
        }).then(standard => {
            assert.equal(standard, 'CC Coin v1.0', 'has the correct standard')
        })
    })
    it('sets the total supply upon deployment', () => {
        return CCCoin.deployed().then(instance => {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(totalSupply => {
            assert.equal(totalSupply.toNumber(), 750000000, 'Total supply set to 750,000,000')
            return tokenInstance.balanceOf(accounts[0]);
        }).then(adminBalance => {
            assert.equal(adminBalance.toNumber(), 750000000, 'It allocates initial amount to admin account')
        })
    })
    it('transfers token ownership', () => {
        return CCCoin.deployed().then(instance => {
            tokenInstance = instance;
            return tokenInstance.transfer.call(accounts[1], 999999999999999999);
        }).then(assert.fail).catch(error => {
            assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
            return tokenInstance.transfer.call(accounts[1], 250000, {from: accounts[0]});
        }).then(success => {
            assert.equal(success, true, 'it returns true');
            return tokenInstance.transfer(accounts[1], 250000, {from: accounts[0]});
        }).then(receipt => {
            assert.equal(receipt.logs.length, 1, 'triggers 1 event');
            assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
            assert.equal(receipt.logs[0].args._from, accounts[0], 'logs the account the tokens are transferred from');
            assert.equal(receipt.logs[0].args._to, accounts[1], 'logs the account the tokens are transferred to');
            assert.equal(receipt.logs[0].args._value, 250000, 'logs the transfer amount');
            return tokenInstance.balanceOf(accounts[1]);
        }).then(balance => {
            assert.equal(balance.toNumber(), 250000, 'adds the amount to the receiving account')
            return tokenInstance.balanceOf(accounts[0])
        }).then(balance => {
            assert.equal(balance.toNumber(), 749750000, 'deducts amount from the sending account');
        })
    })
    it('approves tokens for delegated transfer', () => {
        return CCCoin.deployed().then((instance) => {
            tokenInstance = instance;
            return tokenInstance.approve.call(accounts[1], 100);
        }).then(success => {
            assert.equal(success, true, 'it returns true');
            return tokenInstance.approve(accounts[1], 100, {from: accounts[0]});
        }).then(receipt => {
            assert.equal(receipt.logs.length, 1, 'triggers 1 event');
            assert.equal(receipt.logs[0].event, 'Approve', 'should be the "Approve" event');
            assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are authorized by');
            assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are authorized to');
            assert.equal(receipt.logs[0].args._value, 100, 'logs the transfer amount');
            return tokenInstance.allowance(accounts[0], accounts[1]);
        }).then(allowance => {
            assert.equal(allowance, 100, 'stores the allowance for the delegated transfer');
        })
    })
    it('handles delegated token transfers', function() {
        return CCCoin.deployed().then(function(instance) {
          tokenInstance = instance;
          fromAccount = accounts[2];
          toAccount = accounts[3];
          spendingAccount = accounts[4];
          // Transfer some tokens to fromAccount
          return tokenInstance.transfer(fromAccount, 100, { from: accounts[0] });
        }).then(function(receipt) {
          // Approve spendingAccount to spend 10 tokens form fromAccount
          return tokenInstance.approve(spendingAccount, 10, { from: fromAccount });
        }).then(function(receipt) {
          // Try transferring something larger than the sender's balance
          return tokenInstance.transferFrom(fromAccount, toAccount, 9999, { from: spendingAccount });
        }).then(assert.fail).catch(function(error) {
          assert(error.message.indexOf('revert') >= 0, 'cannot transfer value larger than balance');
          // Try transferring something larger than the approved amount
          return tokenInstance.transferFrom(fromAccount, toAccount, 20, { from: spendingAccount });
        }).then(assert.fail).catch(function(error) {
          assert(error.message.indexOf('revert') >= 0, 'cannot transfer value larger than approved amount');
          return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, { from: spendingAccount });
        }).then(function(success) {
          assert.equal(success, true);
          return tokenInstance.transferFrom(fromAccount, toAccount, 10, { from: spendingAccount });
        }).then(function(receipt) {
          assert.equal(receipt.logs.length, 1, 'triggers one event');
          assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
          assert.equal(receipt.logs[0].args._from, fromAccount, 'logs the account the tokens are transferred from');
          assert.equal(receipt.logs[0].args._to, toAccount, 'logs the account the tokens are transferred to');
          assert.equal(receipt.logs[0].args._value, 10, 'logs the transfer amount');
          return tokenInstance.balanceOf(fromAccount);
        }).then(function(balance) {
          assert.equal(balance.toNumber(), 90, 'deducts the amount from the sending account');
          return tokenInstance.balanceOf(toAccount);
        }).then(function(balance) {
          assert.equal(balance.toNumber(), 10, 'adds the amount from the receiving account');
          return tokenInstance.allowance(fromAccount, spendingAccount);
        }).then(function(allowance) {
          assert.equal(allowance.toNumber(), 0, 'deducts the amount from the allowance');
        });
      });
    });