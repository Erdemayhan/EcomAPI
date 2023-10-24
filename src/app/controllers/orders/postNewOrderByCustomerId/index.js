const handleAPIError = require("~root/utils/handleAPIError");
const createOrderByCustomerId = require("~root/actions/orders/createOrderByCustomerId");

const postNewOrderByCustomerId = async (req, res) => {
  const { customerId, orderDate, orderStatus } = req.body;
  try {
    const { order } = await createOrderByCustomerId({
      customerId,
      orderDate,
      orderStatus
    });
    res.status(201).send({
      order
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = postNewOrderByCustomerId;
