const express = require( 'express' );
const router = express.Router();
const productsController = require( '../controllers/products' );
const auth = require('../middlewares/auth')

router.get( '/products', auth.authorizeUserAdmin,productsController.getAllProducts );
router.post( '/add-products',auth.authorizeAdmin, productsController.addProduct );
router.put( '/edit-products',auth.authorizeAdmin, productsController.editProduct );
router.delete( '/delete-products',auth.authorizeAdmin, productsController.deleteProduct );

module.exports = router;