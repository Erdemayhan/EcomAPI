const { submitQuery, getInsertId } = require("~root/lib/database");

const insertOrderByCustomerId = ({
  customerId,
  orderDate,
  orderStatus
}) => submitQuery`
INSERT INTO orders (customer_id, order_date, order_status)
VALUES (${customerId}, ${orderDate}, ${orderStatus});
`;

module.exports = getInsertId(insertOrderByCustomerId);
