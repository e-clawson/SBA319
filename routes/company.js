// Company Model Routes
import express from "express";
import Company from "../models/companies.js"
import { ObjectId } from 'mongodb';

const router = express.Router();

//find a company by name - reaching line 11 but not findng the correct data 
router.get('/:name', async (req, res) => {
    let query = req.params.name;
    let result = await Company.findOne({query});
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  })

//get all company data - limit results to 5 documents
router.get('/', async (req, res) => {
    const results = await Company.find({}).limit(5)
    console.log(results)
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
  })

//add a new company  
router.post('/', async (req, res) => {
    try { 
        const result = await Company.create({
            name: req.body.name,
            category_code: req.body.category_code, 
            number_of_employees: req.body.number_of_employees
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
       let result = await Company.deleteOne(query) 
       res.send(result).status(200)
    } catch (e) {
      console.log(e)
      res.send(e).status(404)
    }
  })

export default router;