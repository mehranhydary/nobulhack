pragma solidity ^0.4.2;

import "./NobulCoin.sol";

contract NobulCoinSale {
    address admin;
    NobulCoin public  coinContract;
    uint256 public coinPrice;
    uint256 public coinsSold;

    event Sell(
        address _buyer,
        uint256 _amount
    );

    constructor (NobulCoin _coinContract, uint256 _coinPrice) public {
        admin = msg.sender;
        coinContract = _coinContract;
        coinPrice = _coinPrice;
    }

    // multiply from OpenZeppelin SafeMath 
    function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
        // Gas optimization: this is cheaper than asserting 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.   // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }
        c = a * b;
        assert(c / a == b);
        return c;
    }
    function buyCoins(uint256 _numberOfCoins) public payable {
        require(msg.value == mul(_numberOfCoins, coinPrice));
        require(coinContract.balanceOf(this) >= _numberOfCoins);
        require(coinContract.transfer(msg.sender, _numberOfCoins));
        
        coinsSold += _numberOfCoins;
        
        emit Sell(msg.sender, _numberOfCoins);
    }

    function endSale() public {
        require(msg.sender == admin);
        require(coinContract.transfer(admin, coinContract.balanceOf(this)));
        
        selfdestruct(admin);
    }
}