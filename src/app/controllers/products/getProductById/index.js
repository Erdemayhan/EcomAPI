const fetchProductById = require("~root/actions/products/fetchProductById");
const handleAPIError = require("~root/utils/handleAPIError");

const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const { product } = await fetchProductById({
      productId
    });
    res.status(201).send({
      product
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getProductById;
