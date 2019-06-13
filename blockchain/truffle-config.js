///https://docs.microsoft.com/en-us/azure/blockchain/service/send-transaction

const fs = require('fs');
var HDWalletProvider = require("truffle-hdwallet-provider");
var defaultnode = "YourDefaultNodeConnectionString";
var myAccount = "YourAccount";
var myPassword = "YourPassword";
var Web3 = require("web3");
module.exports = {
  networks: {
    defaultnode: {
      provider: (() => {
        const AzureBlockchainProvider = new Web3.providers.HttpProvider(defaultnode);
        const web3 = new Web3(AzureBlockchainProvider);
        web3.eth.personal.unlockAccount(myAccount, myPassword);
        return AzureBlockchainProvider;
      })(),
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      from: myAccount
    },
    data: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\whgriffi\\Desktop\\HighFrequencyData\\blockchain\\mnemonic.txt', 'utf-8'), "https://node27.blockchain.azure.com:3200/eydnJjKLw7cak6tB5k6FJKZP"),
      consortium_id: 1560392318720
    }
  }
};
