const handleAPIError = require("~root/utils/handleAPIError");
const createNewProduct = require("~root/actions/products/createNewProduct");

const postNewProduct = async (req, res) => {
  const { productName, productPrice, productStock } = req.body;
  try {
    const { productId } = await createNewProduct({
      productName,
      productPrice,
      productStock
    });
    res.status(201).send({
      productId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = postNewProduct;
