require('@nomiclabs/hardhat-waffle');
const mnemonic = "job adapt nice angry tongue suit volcano salmon puppy track track glove";

module.exports = {
  solidity : "0.8.0",
  networks: {
    rinkeby:{
      url: "https://rinkeby.infura.io/v3/e318bdeed686419bba004b6f5825a1f6",
      accounts: ["5600065ee445982dc82a28bad14532337969cc02a8a656845878fafff81805f7"]
    }
  }
}