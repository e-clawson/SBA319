import express from "express";
import Grade from "../models/grades.js"
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
  try { 
    const results = await Grade.find({}).limit(5)
    console.log(results)
    res.send(results)
  } catch(e) {
    console.log(e)
  }
})

router.post('/', async (req, res) => {
  try { 
      const result = await Grade.create({
          scores: [],
          class_id: req.body.class_id, 
          learner_id: req.body.learner_id
      })
  console.log(result)
  res.send(result)
  } catch(e) {
      console.log(e)
  }
})

router.patch("/:id", async(req,res) => {
  try{ 
      const query = { _id: new ObjectId(req.params.id)};
      const updates = {
       $push: { class_id: req.body } 
      }
      const result = Grade.updateOne(query, updates);
      res.send(result).status(200)
  } catch (e) {
      console.log(e)
      res.send(e).status(404)
  }
})

router.delete("/:id", async(req,res) =>{
  try {
     const query = { _id: new ObjectId(req.params.id)}
     let result = await Grade.deleteOne(query) 
     res.send(result).status(200)
  } catch (e) {
    console.log(e)
    res.send(e).status(404)
  }
})

export default router;