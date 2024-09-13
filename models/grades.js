import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({ //this is the new model we made for grades
    scores: [],
    class_id: {
        type: Number, 
        required: true,
    },
    learner_id:{ 
        type: Number, 
        required: true,
    },
})

export default mongoose.model('grades', gradeSchema); 