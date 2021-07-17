const DAO = artifacts.require("DAO");

module.exports = function(deployer) {
  deployer.deploy(DAO, 120, 120, 50);
};

//DAO constructor args contributionTime, voteTime, quorum