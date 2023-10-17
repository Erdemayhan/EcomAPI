const { submitQuery, getInsertId } = require("~root/lib/database");

const insertNewProduct = ({
  productName,
  productPrice,
  productStock
}) => submitQuery`
INSERT INTO products (product_name, product_price, product_stock)
VALUES (${productName}, ${productPrice}, ${productStock});
`;

module.exports = getInsertId(insertNewProduct);
