// Company Model Routes
import express from "express";
import Company from "../models/companies.js"

const router = express.Router();

//get all company data - limit results to 5 documents
router.get('/', async (req, res) => {
    const results = await Company.find({}).limit(5)
    console.log(results)
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
  })

//add a new company  
router.post('/company', async (req, res) => {
    try { 
        const result = await Post.create({
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

export default router;