module.exports = () => {
  const customerWalletsDB = require("../data/customer-wallets.js");
  const controller = {};

  controller.listCustomerWallets = (req, res) =>
    res.status(200).json(customerWalletsDB);

  return controller;
};
