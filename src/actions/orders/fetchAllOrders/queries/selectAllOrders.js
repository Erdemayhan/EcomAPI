const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllOrders = () => submitQuery`
    SELECT * FROM orders
`;

module.exports = camelKeys(selectAllOrders);
