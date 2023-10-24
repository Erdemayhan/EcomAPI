const { submitQuery, getInsertId } = require("~root/lib/database");

const insertNewCustomer = ({ customerName, customerEmail }) => submitQuery`
INSERT INTO customers (customer_name, customer_email)
VALUES (${customerName}, ${customerEmail});
`;

module.exports = getInsertId(insertNewCustomer);
