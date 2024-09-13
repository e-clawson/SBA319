import express from 'express';
import 'dotenv/config'
import connectDb from "./db.js"


import Grade from "./models/grades.js"

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', async (req, res) => {
    const results = await Grade.find({ class_id: 300 }).limit(5)
    res.send(results)
    console.log(results)
})

//Grade Routes 
app.post('/', async (req, res) => {
    const gradeDoc = new Grade({
        scores: [],
        class_id: req.body.class_id,
        learner_id: req.body.learner_id,
    })
    const result =  await gradeDoc.save();
    console.log(result)
    res.send(result)
})

// app.get('/:class_id', async (req, res) => {
//     const result = await Grade.find({ class_id: 300 }).limit(5)
//     res.send(result)
//     console.log(result)
// })

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
    connectDb()
});
