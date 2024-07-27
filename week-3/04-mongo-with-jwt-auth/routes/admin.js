const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const Jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secret");
const { Admin, User, Course } = require("../db");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
   
        await Admin.create({
            username:username,
            password:password
        })
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
        },JWT_SECRET)
        res.json({token})
    }else{
        res.status(411).json({msg:"Incorrect email and password"})
    }

   
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;


    await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.status(200).json({msg:'Data entred Successfully'});

});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allCourses = await Course.find({});
    res.status(200).json({courses:allCourses});
});

module.exports = router;