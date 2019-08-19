pragma solidity ^0.5.0;

contract HelloPocteo {
    
    string public myMessage ;
    
    function setMessage(string memory _newMessage) public payable {
        myMessage = _newMessage;
    }
    function getMessage() public view returns (string memory) {
        return myMessage ;
    }
}