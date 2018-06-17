var CCCoin = artifacts.require("./CCCoin.sol");
module.exports = deployer => {

    deployer.deploy(CCCoin, 750000000);
}