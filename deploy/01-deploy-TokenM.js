const {
  TOKEN_NAME,
  TOKEN_SYMBOL,
  INITIAL_SUPPLY,
  TOKEN_PRICE,
} = require("../helper-hardhat-config");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("------------------------------------------");
  console.log("Deploying Token Contract (On local hardhat)......");
  const tokenC = await deploy("TokenM", {
    from: deployer,
    args: [TOKEN_NAME, TOKEN_SYMBOL, INITIAL_SUPPLY, TOKEN_PRICE],
    log: true,
    waitConfirmations: 1,
  });
  console.log("Contract Deployed ✅");
};
module.exports.tags = ["token"];
