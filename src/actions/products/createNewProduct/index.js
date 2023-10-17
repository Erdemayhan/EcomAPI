const insertNewProduct = require("./queries/insertNewProduct");

const createNewProduct = async ({
  productName,
  productPrice,
  productStock
}) => {
  const productId = await insertNewProduct({
    productName,
    productPrice,
    productStock
  });

  return { productId };
};

module.exports = createNewProduct;
