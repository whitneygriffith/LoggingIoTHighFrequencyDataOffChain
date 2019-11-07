
// HashLog
// To keep the hash values of every blob
// contract address:  0xA95E44CBaeC0a9C325EB3BB15D522C29bf3d18F9
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