const {
  submitQuery,
  sql,
  sqlReduce,
  getInsertId
} = require("~root/lib/database");

const updateProductById = ({
  productId,
  productName = null,
  productPrice = null,
  productStock = null
}) => {
  const updates = [];

  if (productName !== null) {
    updates.push(sql`product_name = ${productName}`);
  }

  if (productPrice !== null) {
    updates.push(sql`product_price = ${productPrice}`);
  }

  if (productStock !== null) {
    updates.push(sql`product_stock = ${productStock}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     products
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     product_id = ${productId};
 `;
  }
  return Promise.resolve();
};

module.exports = getInsertId(updateProductById);
