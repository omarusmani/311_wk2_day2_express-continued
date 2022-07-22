const comments = require("../data/comments")

const list=(req,res)=>{
    res.json(comments)
}
const show=(req,res)=>{
    const comment =comments.find((comment)=> comment._id ===Number(req.params.id));
    res.json(comment)
}
const create=(req,res)=>{
    for(i=0;i<comments.length;i++){
        comments[i]._id++
    }
    comments.unshift({
        _id:1,
        ...req.body
    })
    res.json(comments)
}

module.exports={list,show,create}