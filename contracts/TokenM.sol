// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// errors
error TokenM__NotEnoughETH();
error TokenM__NotEnoughToken();

contract TokenM {
    // state variables
    string public name; //name of the token
    string public symbol; //Symbol of the token
    uint8 public decimals = 18;
    uint256 public totalSupply; // total suplly of token
    uint256 public PRICE;
    //address of user to amount mapping
    mapping(address => uint256) public balance;

    // Events
    event TokenIssued(address indexed user, uint256 indexed amount);
    event TokensTransferred(
        address indexed sender,
        address indexed receiver,
        uint256 amount
    );

    // construcor
    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 initialSupply,
        uint256 price
    ) {
        name = tokenName;
        symbol = tokenSymbol;
        // since solidity dont work with decimals so to fix that we can convert token to lower units(such as Gwei)
        totalSupply = initialSupply * 10 ** uint256(decimals);
        PRICE = price;
        //
    }

    function issueToken() public payable {
        require(totalSupply >= 1e18);
        require(msg.sender != address(0x0));
        // Since the price of 1 TA is 0.8 ETH
        if (msg.value < PRICE) {
            revert TokenM__NotEnoughETH();
        }

        uint256 receievedAmount = msg.value;
        uint256 tokensGenerated = (receievedAmount * 10 ** decimals) / PRICE;
        if (tokensGenerated > totalSupply) {
            revert TokenM__NotEnoughToken();
        }
        balance[msg.sender] += tokensGenerated;
        totalSupply -= tokensGenerated;
        emit TokenIssued(msg.sender, tokensGenerated);
    }

    function transfer(
        address to,
        uint256 amount
    ) public returns (bool success) {
        // to should be a valid address
        require(to != address(0x0));
        // also check if the sender has enough tokens in his/her account to send
        require(balance[msg.sender] >= amount);

        balance[msg.sender] -= amount;
        balance[to] += amount;
        emit TokensTransferred(msg.sender, to, amount);
        return true;
    }

    function balanceOf(address user) public view returns (uint256) {
        require(user != address(0x0));
        return balance[user];
    }
}
