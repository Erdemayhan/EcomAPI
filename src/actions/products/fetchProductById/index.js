const selectProductById = require("./queries/selectProductById");

const fetchProductById = async ({ productId }) => {
  const product = await selectProductById({
    productId
  });
  return { product };
};
module.exports = fetchProductById;
