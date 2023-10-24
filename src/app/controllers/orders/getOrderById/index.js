const fetchOrderById = require("~root/actions/orders/fetchOrderById");
const handleAPIError = require("~root/utils/handleAPIError");

const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const { order } = await fetchOrderById({
      orderId
    });
    res.status(201).send({
      order
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getOrderById;
