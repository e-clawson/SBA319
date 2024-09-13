import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({ 
    scores: [],
    class_id: {
        type: Number, 
        required: true,
        cast: false,
    },
    learner_id:{ 
        type: Number, 
        required: true,
    },
})

export default mongoose.model('grades', gradeSchema) 