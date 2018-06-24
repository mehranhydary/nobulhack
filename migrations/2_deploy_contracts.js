var NobulCoin = artifacts.require("./NobulCoin.sol");
var NobulCoinSale = artifacts.require("./NobulCoinSale.sol");

module.exports = deployer => {

    deployer.deploy(NobulCoin, 1000000).then(() => {
        // coin price is 0.001 ETH
        var coinPrice = 1000000000000000;
        return deployer.deploy(NobulCoinSale, NobulCoin.address, coinPrice);
    });
    
}