const express = require('express')
const router = express.Router()
const comments = require("../data/comments")
const commentController = require("../Controllers/comments")

router.get("/comments",(req,res)=>res.json(comments))

router.get("/comments/:id",(req,res)=>{
    const comment =comments.find((comment)=> comment._id ===Number(req.params.id));
    res.json(comment)
})

router.post("comments",(req,res)=>{
    for(i=0;i<comments.length;i++){
        comments[i]._id++
    }
    comments.unshift({
        _id:1,
        ...req.body
    })
    res.json(comments)
})

module.exports =router
