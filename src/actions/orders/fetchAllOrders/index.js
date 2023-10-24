const selectAllOrders = require("./queries/selectAllOrders");

const fetchAllOrders = async () => {
  const orders = await selectAllOrders();

  return { orders };
};

module.exports = fetchAllOrders;
