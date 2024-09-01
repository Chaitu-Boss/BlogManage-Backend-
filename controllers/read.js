import Blog from "../model/blog-model.js";
import User from "../model/user-model.js";

const read=async(req,res)=>{
    try {
        const {username}=req.body
        const writtenuser=User.findOne({username})
            if(writtenuser){
                const blogs = await Blog.find({username})
                res.status(200).json({allBlogs:blogs})
            }
            else{
                res.status(400).json({msg:"User Does Not Exists"})
            }

    } catch (error) {
        console.error(error)
        res.status(501).json({msg:"Oops kuch gadbad hua"})
    }
}

export default read