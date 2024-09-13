import express from 'express';
// import mongoose from 'mongoose';
// import 'dotenv/config'
import db from "./db.js"
import { ObjectId } from 'mongodb';

// import Grade from "./models/grades.js"
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', async (req,res) => {
    try {
        let collection = await db.collection("posts")
        let results = await collection.find({}).limit(50).toArray()
        res.json(results).status(200)
    } catch(e) {
        res.json(e).status(400)
    }
})

app.use((err, _req, res, next) => {
    res.status(500).send("Something isn't working");
  });

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
