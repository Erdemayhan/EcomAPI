const selectOrderById = require("./queries/selectOrderById");

const fetchOrderById = async ({ orderId }) => {
  const order = await selectOrderById({
    orderId
  });
  return { order };
};
module.exports = fetchOrderById;
