import mongoose from "mongoose";

const companySchema = new mongoose.Schema({ 
    name: {
        type: String, 
        required: true,
    },
    category_code:{ 
        type: String, 
        required: true,
    },
    category_code:{ 
        type: String, 
        required: true,
    },
    number_of_employees:{ 
        type: Number, 
        required: true,
    },
})

export default mongoose.model('companies', companySchema) 