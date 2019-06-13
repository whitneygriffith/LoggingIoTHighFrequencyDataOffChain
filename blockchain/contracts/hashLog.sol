pragma solidity >=0.4.25 <0.6.0;

// HahLog
// To keep the hash values of every blob

contract HashLog {
    
    mapping (string => string) logs;

	event inserted(string filename, string hashvalue);

	function insert(string memory filename, string memory hashvalue) public returns(bool sufficient) {
		logs[filename] = hashvalue;
		emit inserted(filename, hashvalue);
		return true;
	}

	function getLog(string memory filename) public view returns(string memory) {
		return logs[filename];
	}
}
