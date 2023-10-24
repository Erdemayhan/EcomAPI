const updateCustomerById = require("./queries/updateCustomerById");

const modifyCustomerById = async ({
  customerId,
  customerName,
  customerEmail
}) => {
  const customer = await updateCustomerById({
    customerId,
    customerName,
    customerEmail
  });

  return { customer };
};

module.exports = modifyCustomerById;
