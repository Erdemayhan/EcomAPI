const removeCustomerByName = require("~root/actions/customers/removeCustomerByName");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteCustomerByName = async (req, res) => {
  const { customerName } = req.params;

  try {
    const { deletedCustomer } = await removeCustomerByName({
      customerName
    });

    res.status(200).send({ deletedCustomer });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteCustomerByName;
