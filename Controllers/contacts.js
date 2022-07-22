const contacts = require("../data/contacts")

const list=(req,res)=>{
    res.json(contacts)
}
const show=(req,res)=>{
    const contact =contacts.find((contact)=> contact._id ===Number(req.params.id));
    res.json(contact)
}
const create=(req,res)=>{
    for(i=0;i<contacts.length;i++){
        contacts[i]._id++
    }
    contacts.unshift({
        _id:1,
        ...req.body
    })
    res.json(contacts)
}

module.exports={list,show,create}