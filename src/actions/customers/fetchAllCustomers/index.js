const selectAllCustomers = require("./queries/selectAllCustomers");

const fetchAllCustomers = async () => {
  const customers = await selectAllCustomers();

  return { customers };
};

module.exports = fetchAllCustomers;
