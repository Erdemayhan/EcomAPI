const { submitQuery } = require("~root/lib/database");

const deleteProductById = ({ productId }) => submitQuery`
    DELETE FROM products WHERE product_id = ${productId} 
`;

module.exports = deleteProductById;
