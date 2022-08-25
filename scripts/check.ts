import { ethers } from "hardhat";
import { Greeter } from "../typechain";

async function main() {
  const address = "0xb7220c274ecf10fdc15ade7f8ca952cf33436fe8";
  const greeterContractFactory = ethers.getContractFactory("Greeter");
  const greeterContract = (await greeterContractFactory).attach(
    address
  ) as Greeter;
  const greet = await greeterContract.greet();
  console.log("greet is " + greet);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
