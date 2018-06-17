var CCCoin = artifacts.require("./CCCoin.sol");
var CCCoinSale = artifacts.require("./CCCoinSale.sol");

module.exports = deployer => {

    deployer.deploy(CCCoin, 1000000).then(() => {
        // coin price is 0.001
        var coinPrice = 1000000000000000;
        return deployer.deploy(CCCoinSale, CCCoin.address, coinPrice);
    });
    
}