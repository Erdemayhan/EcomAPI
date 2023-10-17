const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllProducts = () => submitQuery`
    SELECT * from products
`;

module.exports = camelKeys(selectAllProducts);
