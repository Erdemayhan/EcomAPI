const modifyOrderStatusById = require("~root/actions/orders/modifyOrderStatusById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchOrderStatusById = async (req, res) => {
  const { customerId } = req.params;
  const { orderStatus } = req.body;

  try {
    const { order } = await modifyOrderStatusById({
      customerId,
      orderStatus
    });

    res.status(201).send({
      order
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchOrderStatusById;
