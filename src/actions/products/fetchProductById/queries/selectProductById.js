const { submitQuery, camelKeys } = require("~root/lib/database");

const selectProductById = ({ productId }) => submitQuery`
    SELECT product_name, product_price, product_stock FROM products WHERE product_id = ${productId}
    `;
module.exports = camelKeys(selectProductById);
