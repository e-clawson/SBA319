import express from 'express';
// import mongoose from 'mongoose';
// import 'dotenv/config'
import connectDb from "./db.js"
import { ObjectId } from 'mongodb';

import Grade from "./models/grades.js"
import { connect } from 'mongoose';
const app = express();
const port = 3000;

app.use(express.json())

// await mongoose.connect(process.env.ATLAS_URI);

app.get('/', async (req,res) => {
    let result = await Grade.find({ class_id: 311 });
    res.send(result)
})

app.use((err, _req, res, next) => {
    res.status(500).send("Something isn't working");
  });

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
    connectDb()
});
