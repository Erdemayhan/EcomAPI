const updateProductById = require("./queries/updateProductById");

const modifyProductById = async ({
  productId,
  productName,
  productPrice,
  productStock
}) => {
  const product = await updateProductById({
    productId,
    productName,
    productPrice,
    productStock
  });

  return { product };
};

module.exports = modifyProductById;
