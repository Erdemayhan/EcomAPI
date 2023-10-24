const insertOrderByCustomerId = require("./queries/insertOrderByCustomerId");

const createOrderByCustomerId = async ({
  customerId,
  orderDate,
  orderStatus
}) => {
  const orderId = await insertOrderByCustomerId({
    customerId,
    orderDate,
    orderStatus
  });

  return { orderId };
};

module.exports = createOrderByCustomerId;
