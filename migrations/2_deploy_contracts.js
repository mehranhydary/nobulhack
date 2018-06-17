var CCToken = artifacts.require("./CCToken.sol");
module.exports = deployer => {
    deployer.deploy(CCToken);
}