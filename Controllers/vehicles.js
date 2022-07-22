const vehicles = require("../data/vehicles")

const list=(req,res)=>{
    res.json(vehicles)
}
const show=(req,res)=>{
    const vehicle =vehicles.find((vehicle)=> vehicle._id ===Number(req.params.id));
    res.json(comment)
}
const create=(req,res)=>{
    for(i=0;i<vehicles.length;i++){
        vehicles[i]._id++
    }
    vehicles.unshift({
        _id:1,
        ...req.body
    })
    res.json(vehicles)
}

module.exports={list,show,create}