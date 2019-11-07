const HDWalletProvider = require('truffle-hdwallet-provider');
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
      provider: new HDWalletProvider(fs.readFileSync('/Users/whitneygriffith/Desktop/oneweek/oneweekwcgmember.env', 'utf-8'), "https://oneweekwcgmember.blockchain.azure.com:3200/VcHDIGstdtMEaquBxfJLq-cJ")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};
