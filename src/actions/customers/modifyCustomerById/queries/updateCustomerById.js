const {
  submitQuery,
  sql,
  sqlReduce,
  getInsertId
} = require("~root/lib/database");

const updateCustomerById = ({
  customerId,
  customerName = null,
  customerEmail = null
}) => {
  const updates = [];

  if (customerName !== null) {
    updates.push(sql`customer_name = ${customerName}`);
  }

  if (customerEmail !== null) {
    updates.push(sql`customer_email = ${customerEmail}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
     UPDATE
       customers
     SET
       ${updates.reduce(sqlReduce)}
     WHERE
       customer_id = ${customerId};
   `;
  }
  return Promise.resolve();
};

module.exports = getInsertId(updateCustomerById);
