const selectAllProducts = require("./queries/selectAllProducts");

const fetchProducts = async () => {
  const products = await selectAllProducts();

  return { products };
};

module.exports = fetchProducts;
