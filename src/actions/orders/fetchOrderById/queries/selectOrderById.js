const { submitQuery, camelKeys } = require("~root/lib/database");

const selectOrderById = ({ orderId }) => submitQuery`
    SELECT customer_id, order_date, order_status FROM orders WHERE order_id = ${orderId}
    `;
module.exports = camelKeys(selectOrderById);
