const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCustomerById = ({ customerId }) => submitQuery`
    SELECT customer_name, customer_email FROM customers WHERE customer_id = ${customerId}
    `;
module.exports = camelKeys(selectCustomerById);
