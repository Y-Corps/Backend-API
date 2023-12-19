const express = require("express")
const router = express.Router();
/**
 * Controller for handling product-related operations.
 * @type {Object}
 */
const product = require('../controllers/products')

router.route('/').get(product.GetALL)
router.route('/test').get(product.GetAllTest)

module.exports = router;