const products = require("../data/products")

const list=(req,res)=>{
    res.json(products)
}
const show=(req,res)=>{
    const product =products.find((product)=> product._id ===Number(req.params.id));
    res.json(product)
}
const create=(req,res)=>{
    for(i=0;i<products.length;i++){
        products[i]._id++
    }
    products.unshift({
        _id:1,
        ...req.body
    })
    res.json(products)
}

module.exports={list,show,create}