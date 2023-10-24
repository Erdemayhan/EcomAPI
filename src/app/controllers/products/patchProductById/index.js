const modifyProductById = require("~root/actions/products/modifyProductById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchProductById = async (req, res) => {
  const { productId } = req.params;
  const { productName, productPrice, productStock } = req.body;

  try {
    const { product } = await modifyProductById({
      productId,
      productName,
      productPrice,
      productStock
    });

    res.status(201).send({
      product
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchProductById;
