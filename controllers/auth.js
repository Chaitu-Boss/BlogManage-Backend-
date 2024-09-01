import User from "../model/user-model.js"
import bodyParser from "body-parser"
import bcrypt from "bcryptjs"

const auth = async (req,res)=>{
    try {
        const {username,email, password} = req.body
        const userExisits = await User.findOne({email:email})
        if(userExisits){
            return res.status(400).json({message:"User Already Exists"})
        }
        const saltRounds=10
        const hashPassword=await bcrypt.hash(password,saltRounds)

      const userCreated = await User.create({username,email,password:hashPassword})

      res.status(200).send({msg:userCreated,token: await userCreated.generateToken()})
    } catch (error) {
        console.error("Internal Server Error",error)
        res.status(500).json({message:"Internal Server Error"+error})
    }

}
export default auth