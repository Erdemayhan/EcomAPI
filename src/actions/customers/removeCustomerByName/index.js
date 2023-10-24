const deleteCustomerByName = require("./queries/deleteCustomerByName");

const removeCustomerByName = async ({ customerName }) => {
  const deletedCustomer = await deleteCustomerByName({ customerName });
  return { deletedCustomer };
};

module.exports = removeCustomerByName;
