# Decentralized Autonomous Organization

DAO - Smart contract investment fund controlled by its investors. Closed end fund (time limit)

`npm install`

`truffle test`

To view frontend in browser, first run development blockchain

`truffle develop`

`migrate --reset`

then,

`cd client`

  `npm start`

  example: 

  deploy DAO with 30 sec contributionTime, 30 sec voteTime, 2/3 quorum (67)

  then each investor contributes ether(shares)

  investor then creates a proposal, then other investors have 30 seconds to vote

  admin executes proposal which should deposit ether in receiving account address



