const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllCustomers = () => submitQuery`
    SELECT * FROM customers
`;

module.exports = camelKeys(selectAllCustomers);
