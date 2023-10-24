const deleteOrderByCustomerId = require("./queries/deleteOrderByCustomerId");

const removeOrderByCustomerId = async ({ customerId }) => {
  const deletedOrder = await deleteOrderByCustomerId({ customerId });
  return { deletedOrder };
};

module.exports = removeOrderByCustomerId;
