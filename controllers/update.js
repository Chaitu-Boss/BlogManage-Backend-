import Blog from "../model/blog-model.js";
import User from "../model/user-model.js";

const update=async(req,res)=>{
    try {
        const {username,_id,newTitle,newBody} = req.body
        const writtenUser= await User.findOne({username})
        const objectId=_id
        const blogExists = await User.findById(objectId)
        if(writtenUser && blogExists){
            const blog = await Blog.findByIdAndUpdate(objectId,{title:newTitle,body:newBody})
            res.status(200).json({searchedAndUpdatedBlog:blog})
        }
        else{
            res.status(400).json({msg:"User Does Not Exists or Blog Id invalid"})
        }

    } catch (error) {
        console.error(error)
        res.status(501).json({msg:"Oops Gadbad hua"})
    }

}
export default update