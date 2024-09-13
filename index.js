import express from 'express';
import 'dotenv/config'
import connectDb from "./db.js"
import { ObjectId } from 'mongodb';

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', async (req,res) => {
    try {
        let collection = await connectDb.collection("posts")
        let results = await collection.find({}).limit({}).toArray()
        res.json(results).status(200)
    } catch (error) {
        res.json(error).status(400)
    }
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
