import express from "express"
import auth from "../controllers/auth.js"
import login from "../controllers/login.js"
import create from "../controllers//create.js"
import read from "../controllers/read.js"
import update from "../controllers/update.js"


const router = express.Router()

router.route("/").get((req,res)=>{
    res.send("Hello backend se")
})
router.route("/auth").post(auth)
router.route("/login").post(login)
router.route("/create").post(create)
router.route("/read").post(read)
router.route("/update").post(update)

export default router