# Decentralized Autonomous Organization

DAO - Smart contract investment fund controlled by its investors. Closed end fund (time limit)

`npm install`

`truffle test`

nvm use 16.20

npm install -D hardhat

To view frontend in browser, first run development blockchain

`truffle develop` -- npx hardhat node

`migrate --reset`

then,

`cd client`

  `npm start`

  example: 

  deploy DAO with 30 sec contributionTime, 30 sec voteTime, 2/3 quorum (67)

  then each investor contributes ether and receives shares in return (1 wei = 1 share)

  investor then creates a proposal, then other investors have 30 seconds to vote

  admin executes proposal which should deposit ether in receiving account address representing proposal



