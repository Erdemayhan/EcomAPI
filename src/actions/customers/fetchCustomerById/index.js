const selectCustomerById = require("./queries/selectCustomerById");

const fetchOrderById = async ({ customerId }) => {
  const customer = await selectCustomerById({
    customerId
  });
  return { customer };
};
module.exports = fetchOrderById;
