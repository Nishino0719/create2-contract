import { ethers } from "hardhat";
import { CreateContract, Greeter } from "../typechain";

async function main() {
  const CreateContractFactory = await ethers.getContractFactory(
    "CreateContract"
  );
  const createContract =
    (await CreateContractFactory.deploy()) as CreateContract;

  await createContract.deployed();
  console.log(
    `CreateContract Tx: https://ropsten.etherscan.io/tx/${createContract.deployTransaction.hash}`
  );
  console.log(
    `Deployed 🔗 Create Contract Contract Address: ${createContract.address}`
  );

  const tx = await createContract.createGreeterContract();
  tx.wait();
  console.log(tx);
  console.log(
    `exec 🏄🏻‍♂️ 'createGreeterContract' Tx: https://ropsten.etherscan.io/tx/${tx.hash}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
