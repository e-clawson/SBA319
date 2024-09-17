import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI)
        console.log('MongoDB connected')
    } catch(e) {
        console.log(e)
    }
}

export default connectDb;

// Note you must specify the database you want to connect to.
// this is why right now it isnt working - its connecting to the "test database"