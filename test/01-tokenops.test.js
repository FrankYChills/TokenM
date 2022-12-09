const { getNamedAccounts, ethers, deployments } = require("hardhat");

describe("Token Contract", function () {
  console.log("----------- Starting Unit test ---------------");
  let deployer, tokenContract;
  beforeEach(async () => {
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    console.log("Deploying Contract First ...");
    await deployments.fixture(["token"]);
    tokenContract = await ethers.getContract("TokenM");
  });
  describe("Constructor Check", () => {
    it("Initializes the token contract correctly", async () => {
      const name = await tokenContract;
    });
  });
});
