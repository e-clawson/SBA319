// Post Model Routes 
import express from "express";
import Post from "../models/posts.js"
import { ObjectId } from 'mongodb';

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

router.delete("/:id", async(req,res) =>{
    try {
       const query = { _id: new ObjectId(req.params.id)}
       let result = await Post.deleteOne(query) 
       res.send(result).status(200)
    } catch (e) {
      console.log(e)
      res.send(e).status(404)
    }
  })

export default router;
