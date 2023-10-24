const fetchAllCustomers = require("~root/actions/customers/fetchAllCustomers");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllCustomers = async (req, res) => {
  try {
    const { customers } = await fetchAllCustomers();
    res.status(201).send({
      customers
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllCustomers;
