const {
  submitQuery,
  sql,
  sqlReduce,
  getInsertId
} = require("~root/lib/database");

const updateOrderStatusById = ({ customerId, orderStatus = null }) => {
  const updates = [];

  if (orderStatus !== null) {
    updates.push(sql`order_status = ${orderStatus}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
     UPDATE
       orders
     SET
       ${updates.reduce(sqlReduce)}
     WHERE
       customer_id = ${customerId};
   `;
  }
  return Promise.resolve();
};

module.exports = getInsertId(updateOrderStatusById);
