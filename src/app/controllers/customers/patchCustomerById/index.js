const modifyCustomerById = require("~root/actions/customers/modifyCustomerById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchCustomerById = async (req, res) => {
  const { customerId } = req.params;
  const { customerName, customerEmail } = req.body;

  try {
    const { customer } = await modifyCustomerById({
      customerId,
      customerName,
      customerEmail
    });

    res.status(201).send({
      customer
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchCustomerById;
