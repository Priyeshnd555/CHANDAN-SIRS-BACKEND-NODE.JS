const express = require("express");

const router = express.Router();

const productController = require("../controllers/products");
const auth = require('../middlewares/auth')

router.get("/products",auth.authorizedUserAdmin, productController.getAllProducts);

router.post('/add-products',auth.authorizeAdmin,productController.addProducts)
router.put('/edit-products',auth.authorizeAdmin,productController.editProducts)
router.delete('/delete-product',auth.authorizeAdmin,productController.deleteProduct)




module.exports = router;
