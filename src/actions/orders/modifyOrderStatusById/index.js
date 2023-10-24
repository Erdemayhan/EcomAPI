const updateOrderStatusById = require("./queries/updateOrderStatusById");

const modifyOrderStatusById = async ({ customerId, orderStatus }) => {
  const order = await updateOrderStatusById({
    customerId,
    orderStatus
  });

  return { order };
};

module.exports = modifyOrderStatusById;
