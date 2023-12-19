const express = require("express")
const router = express.Router();




const adminController = require('../controllers/adminController')
const isblog = require('../middleware/isblog')

router.route('/').get(adminController.Blog1)
router.route('/blog').get(isblog.isBlog, adminController.Blog2)
router.route('/blog-setup').get(adminController.Blog3)


// add middleware isblog
// router.route('/blog').get(isblog, adminController.Blog2)
module.exports = router;