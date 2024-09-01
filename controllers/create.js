import User from "../model/user-model.js";
import bcrypt from "bcryptjs"
import Blog from "../model/blog-model.js";

const create=async(req,res)=>{
    try {
        const {username,title,body}=req.body
        if (!title || !body ) {
            return res.status(400).json({ msg: "Missing required fields" });
        }
        const newBlog = await Blog.create({username,title,body})
        res.status(200).json({msg:newBlog})

    } catch (error) {
        console.error(error)
        res.status(500).json({msg:"Gadbad hua kuch"})
    }
}

export default create