import mongoose from "mongoose";
import 'dotenv/config' 

const connectDb = async () => {
    try{ 
        await mongoose.connect(process.env.ATLAS_URI)
        console.log("mongodb connected") //so you know it works 
    } catch (error) {
        console.log(error)
    }
}
// let db = connectDb.db("sample_training")

export default connectDb;

