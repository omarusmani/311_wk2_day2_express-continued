const express = require('express')
const router = express.Router()
const vehicles = require("../data/vehicles")

router.get("/vehicles",(req,res)=>res.json(vehicles))

router.get("/vehicles/:id",(req,res)=>{
    const vehicle =vehicles.find((vehicle)=> vehicle.id ===Number(req.params.id));
    res.json(vehicle)
})
router.post("/vehicles",(req,res)=>{
    for(i=0;i<vehicles.length;i++){
        vehicles[i]._id++
    }
    vehicles.unshift({
        _id:1,
        ...req.body
    })
    res.json(vehicles)
})

module.exports=router
