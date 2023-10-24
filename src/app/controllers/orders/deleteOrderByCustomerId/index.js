const removeOrderByCustomerId = require("~root/actions/orders/removeOrderByCustomerId");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteOrderByCustomerId = async (req, res) => {
  const { customerId } = req.params;

  try {
    const { deletedOrder } = await removeOrderByCustomerId({
      customerId
    });

    res.status(200).send({ deletedOrder });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteOrderByCustomerId;
