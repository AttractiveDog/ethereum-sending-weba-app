require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/kAnGZD3AchQCsemq5Qjl-iyD-jmkrEkN',
      accounts: ['626052dddda12ea9a80f723318023c84fface34c722ce468c5c56a5ea15c8507'],
    },
  },
};