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

// const Schema = mongoose.Schema
// const ItemSchema = new Schema({
//     title: String,
//     image: String,
//     price: String,
//     description: String,
//     email: String,
// })

export default connectDB
// export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)
