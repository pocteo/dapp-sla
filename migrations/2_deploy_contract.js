var pocteo = artifacts.require("HelloPocteo");

module.exports = function(deployer) {
  deployer.deploy(pocteo);
};