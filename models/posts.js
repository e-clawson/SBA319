import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    body: {
        type: String, 
        required: true,
    },
    author:{ 
        type: String, 
        required: true,
    },
    title:{ 
        type: String, 
        required: true,
    },
})

export default mongoose.model('post', postSchema) 