import bodyParser from "body-parser";
import User from "../model/user-model.js";
import bcrypt from "bcryptjs"
import Blog from "../model/blog-model.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExsits = await User.findOne({ email })
        if (!userExsits) {
            return res.status(400).json({ message: "User Does Not Exits Go To Register page" })
        }
        const userval = bcrypt.compare(password, userExsits.password)
        if (userval) {
            res.status(200).json({ msg: userExsits, token: await userExsits.generateToken() })
        } else {
            return res.status(400).json({ message: "Inavlid Username Or Password" })
        }
    } catch (error) {
        res.status(501).json({msg:"Oops I fucked Up"+error})
    }
}


export default login