import express from "express";
import Grade from "../models/grades.js"
import connectDb from "../db.js";

const router = express.Router();

//Grade Routes 

router.get('/', async (req, res) => {
  const results = await Grade.find({}).limit(5)
  console.log(results)
  if (!results) res.send("Not found").status(404);
  else res.send(results).status(200);
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

export default router;