var express = require('express');
var router = express.Router();

const Product = require('../models/product');

router.get('/',(req,res,next)=>{
    Product.find(function(err, products){
        if(err) console.log(err);
           
        res.render('index',{
            title:"MeshMall",
            products:products
        })
    })
})

module.exports = router;


