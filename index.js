import express from 'express';
import 'dotenv/config'
import connectDb from "./db.js"


import Grade from "./models/grades.js"
import Post from "./models/posts.js"

const app = express();
const port = 3000;

app.use(express.json())

//Grade Routes 
app.get('/', async (req, res) => {
    const results = await Grade.find({ class_id: 311 }).limit(5)
    console.log(results)
    res.send(results)
})

//Grade Routes 

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

// post Routes 

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

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
    connectDb()
});
