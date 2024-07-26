const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../../03-mongo/db");
const router = Router();
const Jwt = require('jsonwebtoken');
const { JWT_SERCET } = require("../secret");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
   
        await Admin.create({
            username:username,
            password:password
        }) 
        console.log("req sent successfully")
        res.status(200).json({msg:"Admin created Successfully"})
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValidated = await User.find({
        username,
        password
    })
    if(isValidated){
        const token =  Jwt.sign({
            username
        },JWT_SERCET)
        res.json({token})
    }else{
        res.status(411).json({msg:"Incorrect email and password"})
    }

   
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;