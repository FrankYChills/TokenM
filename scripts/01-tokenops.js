const { getNamedAccounts, ethers, deployments } = require("hardhat");
async function main() {
  console.log(
    "---------------- Working on the Token Contract ----------------------"
  );
  console.log("Getting Token Contract ....");
  const accounts = await ethers.getSigners();
  const accountA = accounts[0]; //deployer account
  const accountB = accounts[1];
  const PURCHASE_PRICE = "2000000000000000000"; // 2 ETH
  const tokenContract = await ethers.getContract("TokenM");
  console.log(
    "------------------- Getting data from the contract --------------------"
  );
  const tokenName = await tokenContract.name();
  console.log(`The Name of the Token is ${tokenName.toString()}`);
  const tokenSymbol = await tokenContract.symbol();
  console.log(`The Symbol of the Token is ${tokenSymbol.toString()}`);
  var totalSupply = await tokenContract.totalSupply();
  console.log(
    `Total Supplies of Tokens is ${totalSupply.toString()} or ${(
      totalSupply / 1e18
    ).toString()} Tokens`
  );
  console.log(
    "------------------------------------------------------------------------"
  );
  let accountABalance = await tokenContract.balanceOf(accountA.address);
  console.log(
    `Getting balance of deployer account or Account A - > ${accountABalance.toString()} or ${(
      accountABalance / 1e18
    ).toString()} Tokens`
  );
  console.log("Getting tokens for 2 ETH [Price of 1DW token is 0.08 ETH]");
  await tokenContract.issueToken({ value: PURCHASE_PRICE });
  accountABalance = await tokenContract.balanceOf(accountA.address);
  console.log(
    `Now the balance of deployer account or Account A on the contract - > ${accountABalance.toString()} or ${(
      accountABalance / 1e18
    ).toString()} Tokens`
  );
  console.log(
    "------------------------------------------------------------------------"
  );

  let accountBBalance = await tokenContract.balanceOf(accountB.address);
  console.log(
    `Getting balance of account B on the contract - > ${accountBBalance.toString()} or ${(
      accountBBalance / 1e18
    ).toString()} Tokens`
  );
  console.log(
    "------------------------------------------------------------------------"
  );

  console.log(
    "Transferring  10 tokens from Account A to Account B on the contract ..."
  );
  const amountToTransfer = "10000000000000000000";
  await tokenContract.transfer(accountB.address, amountToTransfer);
  console.log("Amount Transferred");
  accountBBalance = await tokenContract.balanceOf(accountB.address);
  console.log(
    `Now the balance of account B on the contract - > ${accountBBalance.toString()} or ${(
      accountBBalance / 1e18
    ).toString()} Tokens`
  );
  accountABalance = await tokenContract.balanceOf(accountA.address);
  console.log(
    `And the balance of deployer account or Account A on the contract - > ${accountABalance.toString()} or ${(
      accountABalance / 1e18
    ).toString()} Tokens`
  );
  console.log(
    "------------------------------------------------------------------------"
  );
  var totalSupply = await tokenContract.totalSupply();
  console.log(
    `Total supply of token is now : ${totalSupply} or ${(
      totalSupply / 1e18
    ).toString()} Tokens`
  );
  console.log(
    "---------------------------- TASK FINISHED -------------------------------"
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
