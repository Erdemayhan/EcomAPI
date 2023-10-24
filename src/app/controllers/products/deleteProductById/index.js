const removeProductById = require("~root/actions/products/removeProductById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    const { deletedProduct } = await removeProductById({
      productId
    });

    res.status(200).send({ deletedProduct });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteProductById;
