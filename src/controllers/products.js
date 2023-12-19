const Product = require('../models/product');

const GetALL = async(req, res)=>{
    const products = await Product.find(req.query).sort('name');
    res.status(200).json({products})
};

const GetAllTest = async(req, res)=>{
    res.status(200).send("djsdls")
};

module.exports = {GetALL, GetAllTest}