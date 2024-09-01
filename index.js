import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import router from "../Backend-BlogAPI/router/router.js"
import connectDB from "../Backend-BlogAPI/utils/db.js"

const app = express()
const port= 3000

app.use(express.json())

app.use("/api",router)


connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Running On Port ${port}`)
    })
})
