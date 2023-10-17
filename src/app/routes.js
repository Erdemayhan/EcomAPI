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

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.get("/products", getAllProducts);

router.get("/products/:productId", getProductById);

router.post("/product", postNewProduct);

// router.patch("/products/:productId", patchProductbyId);

// router.delete("/products/:productId", deleteProduct);

module.exports = router;
