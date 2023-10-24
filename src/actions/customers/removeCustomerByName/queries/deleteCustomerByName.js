const { submitQuery } = require("~root/lib/database");

const deleteCustomerByName = ({ customerName }) => submitQuery`
    DELETE FROM customers WHERE customer_name = ${customerName} 
`;

module.exports = deleteCustomerByName;
