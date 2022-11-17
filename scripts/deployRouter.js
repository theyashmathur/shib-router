const { ethers, upgrades } = require("hardhat");

async function main() {
  const Router = await ethers.getContractFactory("PancakeRouter")
  const contract = await Router.deploy("0x78B90649fB09B7E84Ed9B8a4e3181703AaC9ED3C", "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd")
  console.log("contract deployed at:", contract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
