const insertNewCustomer = require("./queries/insertNewCustomer");

const createNewCustomer = async ({ customerName, customerEmail }) => {
  const customer = await insertNewCustomer({
    customerName,
    customerEmail
  });

  return { customer };
};

module.exports = createNewCustomer;
