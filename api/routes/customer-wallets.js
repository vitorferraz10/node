export default (app) => {
  const controller = require("../controller/customerWallets")();

  app.route("/api").get(controller.listCustomerWallets);
};
