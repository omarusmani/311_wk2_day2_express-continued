const express = require('express')
const router = express.Router()
const contacts = require("../data/contacts")

router.get("/contacts",(req,res)=>res.json(contacts))

router.get("/contacts/:id",(req,res)=>{
    const person =contacts.find((contact)=> contact._id ===Number(req.params.id));
    res.json(person)
})
router.post("/contacts",(req,res)=>{
    for(i=0;i<contacts.length;i++){
        contacts[i]._id++
    }
    contacts.unshift({
        _id:1,
        ...req.body
    })
    res.json(contacts)
})
 module.exports =router