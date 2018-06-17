var CCToken = artifacts.require("./CCToken.sol");

contract("CCToken", accounts => {
    it('sets the total supply upon deployment', () => {
        return CCToken.deployed().then(instance => {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(totalSupply => {
            assert.equal(totalSupply.toNumber(), 750000000, 'Total supply set to 750,000,000')
        })
    })
})