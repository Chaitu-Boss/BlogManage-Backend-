import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true 
    }
})
const Blog = new mongoose.model("Blog",blogSchema)
export default Blog