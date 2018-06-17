pragma solidity ^0.4.2;

import "./CCCoin.sol";

contract CCCoinSale {
    address admin;
    CCCoin public  coinContract;
    uint256 public coinPrice;

    constructor (CCCoin _coinContract, uint256 _coinPrice) public {
        admin = msg.sender;
        coinContract = _coinContract;
        coinPrice = _coinPrice;
    }
}