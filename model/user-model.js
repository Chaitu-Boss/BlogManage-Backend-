import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const key = "iamtheboss"
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
userSchema.methods.generateToken = async function () {
    console.log("Hello I am Token")
    const User = this
    try {
        return (
            jwt.sign({
                userid: this._id.toString(),
                username: this.username,
                email: this.email
            },
            key,
            {
                expiresIn:'20m'
            }
            )
        )
    } catch (error) {
        console.error(error)
    }

}
const User = new mongoose.model("User", userSchema)

export default User