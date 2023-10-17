const fetchProducts = require("~root/actions/products/fetchProducts");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllProducts = async (req, res) => {
  try {
    const { products } = await fetchProducts();
    res.status(201).send({
      products
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllProducts;
