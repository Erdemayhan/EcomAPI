const handleAPIError = require("~root/utils/handleAPIError");
const createNewCustomer = require("~root/actions/customers/createNewCustomer");

const postNewCustomer = async (req, res) => {
  const { customerName, customerEmail } = req.body;
  try {
    const { customer } = await createNewCustomer({
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
module.exports = postNewCustomer;
