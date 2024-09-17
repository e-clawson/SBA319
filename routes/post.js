// Post Model Routes 
import express from "express";
import Post from "../models/posts.js"

const router = express.Router();

router.get('/', async (req, res) => {
    const results = await Post.find({}).limit(5)
    console.log(results)
    res.send(results)
})

router.post('/', async (req, res) => {
    try { 
        const result = await Post.create({
            body: req.body.body,
            author: req.body.author, 
            title: req.body.title
        })
    console.log(result)
    res.send(result)
    } catch(e) {
        console.log(e)
    }
})

export default router;
