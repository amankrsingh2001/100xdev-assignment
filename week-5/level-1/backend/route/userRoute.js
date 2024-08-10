import express from "express"
import { getCard, newUser } from "../controller/userController.js";


const userRouter = express.Router();




userRouter.get('/',getCard)

userRouter.post('/addUser',newUser);

export default userRouter
