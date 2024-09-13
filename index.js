import express from 'express';
const app = express();
const port = 8080;

app.get('/', async (req,res) => {
    res.send("hello!")
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
