import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://ibis_stk:Ab09024853798@cluster0.r1mkfqg.mongodb.net/?retryWrites=true&w=majority")
        console.log("success: Connected to MongoDB")
    } catch (error) {
        console.log("Failure: unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB
