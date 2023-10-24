const { submitQuery } = require("~root/lib/database");

const deleteOrderByCustomerId = ({ customerId }) => submitQuery`
    DELETE FROM orders WHERE customer_id = ${customerId} 
`;

module.exports = deleteOrderByCustomerId;
