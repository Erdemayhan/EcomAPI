const deleteProductById = require("./queries/deleteProductById");

const removeProductById = async ({ productId }) => {
  const deletedProduct = await deleteProductById({ productId });
  return { deletedProduct };
};

module.exports = removeProductById;
