const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./data/contacts")
const comments = require("./data/comments")
const products = require("./data/products")
const vehicles = require("./data/vehicles")
const app = express();
app.use(express.static("public"))
app.use(bodyParser.json())

//all
app.get("/contacts",(req,res)=>res.json(contacts))
app.get("/comments",(req,res)=>res.json(comments))
app.get("/products",(req,res)=>res.json(products))
app.get("/vehicles",(req,res)=>res.json(vehicles))

//onething
app.get("/contacts/:id",(req,res)=>{
    const person =contacts.find((contact)=> contact._id ===Number(req.params.id));
    res.json(person)
})
app.get("/comments/:id",(req,res)=>{
    const comment =comments.find((comment)=> comment._id ===Number(req.params.id));
    res.json(comment)
})
app.get("/products/:id",(req,res)=>{
    const product =products.find((product)=> product._id ===Number(req.params.id));
    res.json(product)
})
app.get("/vehicles/:id",(req,res)=>{
    const vehicle =vehicles.find((vehicle)=> vehicle.id ===Number(req.params.id));
    res.json(vehicle)
})
//post stuff
app.post("/contacts",(req,res)=>{
    for(i=0;i<contacts.length;i++){
        contacts[i]._id++
    }
    contacts.unshift({
        _id:1,
        ...req.body
    })
    res.json(contacts)
})
app.post("comments",(req,res)=>{
    for(i=0;i<comments.length;i++){
        comments[i]._id++
    }
    comments.unshift({
        _id:1,
        ...req.body
    })
    res.json(comments)
})
app.post("products",(req,res)=>{
    for(i=0;i<products.length;i++){
        products[i]._id++
    }
    products.unshift({
        _id:1,
        ...req.body
    })
    res.json(products)
})
app.post("/vehicles",(req,res)=>{
    for(i=0;i<vehicles.length;i++){
        vehicles[i]._id++
    }
    vehicles.unshift({
        _id:1,
        ...req.body
    })
    res.json(vehicles)
})



const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
