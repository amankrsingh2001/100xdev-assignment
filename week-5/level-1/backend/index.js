import express from "express";
import  userRouter  from './route/userRoute.js'
import dbConnect from "./db.js/dbConnect.js";
import cors from "cors"


const app = express()

app.use(cors());

dbConnect();

app.use(express.json());

app.use('/home',userRouter)

app.listen(8080,()=>{
    console.log("App is listining on port 8080")
})