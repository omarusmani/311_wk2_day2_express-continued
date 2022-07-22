const express = require('express')
const router = express.Router()
const products = require("../data/products")

router.get("/products",(req,res)=>res.json(products))
router.get("/products/:id",(req,res)=>{
    const product =products.find((product)=> product._id ===Number(req.params.id));
    res.json(product)
})
router.post("products",(req,res)=>{
    for(i=0;i<products.length;i++){
        products[i]._id++
    }
    products.unshift({
        _id:1,
        ...req.body
    })
    res.json(products)
})


module.exports=router
