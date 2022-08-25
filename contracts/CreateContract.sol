// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './Greeter.sol';

contract CreateContract {
    function createContract() public payable returns (address){
        return address(new Greeter("used create2 contract"));
    }
}