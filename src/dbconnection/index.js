import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async()=>{
    try {
        const connectionResult = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected !! DB HOST: ${connectionResult}`)
        
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
        
    }
}

export default connectDB


