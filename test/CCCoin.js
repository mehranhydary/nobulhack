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
})