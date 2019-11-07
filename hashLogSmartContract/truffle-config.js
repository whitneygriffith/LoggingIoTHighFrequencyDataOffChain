const HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "runway merge resist deal ice hurry strategy chalk pottery quarter finger record";
var networkEndpoint = "https://oneweekwcgmember.blockchain.azure.com:3200/VcHDIGstdtMEaquBxfJLq-cJ"

const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    oneweek: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(mnemonic, networkEndpoint)
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};
