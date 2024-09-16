import express from 'express';
import connectDb from "./db.js"
import 'dotenv/config'

import Grade from "./models/grades.js"
import Post from "./models/posts.js"
import Company from "./models/companies.js"

const app = express();
const port = 3000;

app.use(express.json())

//Grade Routes 
app.get('/grade', async (req, res) => {
    const collection = await connectDb.collection("grades")
    let result = await collection 
    console.log(result)
    res.send(result)
})


// Post Model Routes 

//giving me a status of 200 but not displaying anything on the page 
app.get('/posts', async (req, res) => {
    const results = await Post.find({}).limit(5)
    console.log(results)
    res.send(results)
})

app.post('/posts', async (req, res) => {
    try { 
        console.log(req.body)
        console.log(typeof req.body.body)
        console.log(typeof req.body.author)
        console.log(typeof req.body.title)
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

// Company Model Routes 

app.get('/company', async (req, res) => {
    const results = await Company.find({ category_code: "social" }).limit()
    console.log(results)
    res.send(results)
})

app.post('/company', async (req, res) => {
    try { 
        console.log(req.body)
        console.log(typeof req.body.name)
        console.log(typeof req.body.category_code)
        console.log(typeof req.body.number_of_employees)
        const result = await Post.create({
            body: req.body.name,
            author: req.body.category_code, 
            title: req.body.number_of_employees
        })
    console.log(result)
    res.send(result)
    } catch(e) {
        console.log(e)
    }
})

//Grade Routes 
app.get('/', async (req, res) => {
    res.send("hello!")
})

//working in reqbin and in my nodemon server but not showing up in compass 
app.post('/', async (req, res) => {
    try { 
        console.log(req.body)
        console.log(typeof req.body.class_id)
        console.log(typeof req.body.learner_id)
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

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
    connectDb()
});
