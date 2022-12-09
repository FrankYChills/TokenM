# Token Manager Project

Token Manager manages the DW tokems of the contract and have functionalities such as tranfer and issuing a token.

Token Name -> DWOLF (DW)
Contract is deployed with a total supply of 1000 tokens.

Users can own/issue a token by paying some fee in ETH. For this contract the fee is 0.08 ETH/DW.

## Run the contract on local blockchain

`To test the contract fork this repo and in terminal run the following commands - `

1. `yarn install` -> Installs all the dependencies
2. `yarn hardhat node` -> runs a local blockchain node and automatically deploys TokenM contract onto that.
3. Finally for checking functionalities -> Without closing the current terminal open a new terminal and run `yarn hardhat run scripts/01-tokenops.js --network localhost` => runs the js script which displays contract's working functionalities.

## Alternatively You can test the contract on Remix IDE(Online)

`To test the contract on remix do -  `

1. Copy the TokenM.sol file from contracts folder.
2. Go to the remix IDE [Click here](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js)
3. Delete all the files inside contracts folder and make a new file with the name `TokenM.sol` and paste the code there.
4. Press `Ctrl + S` to compile the code.
5. Click the deploy and run transaction button in left side panel.
6. Select the current contract `TokenM` and before deploying the contract pass the following argument to the contract => `DWOLF,DW,1000,80000000000000000` . Then Hit deploy button.
7. After deploying explore the functionalities of the contract.
