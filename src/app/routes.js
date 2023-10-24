const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getAllProducts = require("./controllers/products/getAllProducts");
const getProductById = require("./controllers/products/getProductById");
const postNewProduct = require("./controllers/products/postNewProduct");
const patchProductById = require("./controllers/products/patchProductById");
const deleteProductById = require("./controllers/products/deleteProductById");
const postNewOrderByCustomerId = require("./controllers/orders/postNewOrderByCustomerId");
const patchOrderStatusById = require("./controllers/orders/patchOrderStatusById");
const getAllOrders = require("./controllers/orders/getAllOrders");
const getOrderById = require("./controllers/orders/getOrderById");
const deleteOrderByCustomerId = require("./controllers/orders/deleteOrderByCustomerId");
const getAllCustomers = require("./controllers/customers/getAllCustomers");
const getCustomerById = require("./controllers/customers/getCustomerById");
const postNewCustomer = require("./controllers/customers/postNewCustomer");
const patchCustomerById = require("./controllers/customers/patchCustomerById");
const deleteCustomerByName = require("./controllers/customers/deleteCustomerByName");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);

// Specific değişiklikler için her zaman Id kullanılmalıdır.

// Products
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.get("/products", getAllProducts);

router.get("/products/:productId", getProductById);

router.post("/product", postNewProduct);

router.patch("/products/:productId", patchProductById);

router.delete("/product/:productId", deleteProductById);

// Orders

router.get("/orders", getAllOrders);

router.get("/order/:orderId", getOrderById);

router.post("/order", postNewOrderByCustomerId);

router.patch("/order/:customerId", patchOrderStatusById);

router.delete("/order/:customerId", deleteOrderByCustomerId);

// customers

router.get("/customers", getAllCustomers);

router.get("/customer/:customerId", getCustomerById);

router.post("/customer", postNewCustomer);

router.patch("/customer/:customerId", patchCustomerById);

router.delete("/customer/:customerName", deleteCustomerByName); // ilk Id li customer silmiyor ama geriye kalanları siliyor

module.exports = router;
