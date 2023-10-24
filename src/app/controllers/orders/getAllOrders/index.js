const fetchAllOrders = require("~root/actions/orders/fetchAllOrders");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllOrders = async (req, res) => {
  try {
    const { orders } = await fetchAllOrders();
    res.status(201).send({
      orders
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllOrders;
