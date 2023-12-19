const blogModel = require("../models/blogModel");

/**
 * Middleware function to check if there are any blogs in the database.
 * If there are no blogs and the requested URL is not "/blog-setup", redirect to "/blog-setup".
 * Otherwise, call the next middleware function.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */


const isBlog = async (req, res, next) => {
    try {
        const blogs4 = await blogModel.find({});
        // console.log(blogs4.length \)
        blogs4.length==0 ? console.log("no blog") : console.log("blog found")
        if (blogs4.length == 0 && req.url != "/blog-setup") {
            return res.redirect("/blog-setup");
        }
        else{
            next();
        }
    
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    isBlog
};
