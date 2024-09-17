import express from 'express';
import connectDb from "./db.js"

import companies from "./routes/company.js"
import grades from "./routes/grade.js"
import posts from "./routes/post.js"

const port = 3000;
const app = express();
app.use(express.json())

app.use("/companies", companies);
app.use("/grades", grades);
app.use("/posts", posts);

//General Route - working 
app.get('/', async (req, res) => {
    res.send("hello!")
    console.log("/")
})

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
    connectDb()
});
