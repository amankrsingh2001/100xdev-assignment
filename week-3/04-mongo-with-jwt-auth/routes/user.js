const { Router } = require("express");
const Jwt = require('jsonwebtoken')

const router = Router();
const {User, Course} = require("../db")
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require('../secret')


// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.status(200).json({msg:"User created successfully"})
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValidated = await User.findOne({
        username,
        password
    })
    if(isValidated){
        const token = Jwt.sign({
            username
        },JWT_SECRET)
        res.status(200).json({token})
    }else{
        res.status(411).json({msg:"Incorrect credentials"})
    }

});

router.get('/courses',async (req, res) => {
    console.log("I am reaching here")
    try {
        const allCourses = await Course.find({});
        res.status(200).json({allCourses});
    } catch (error) {
        console.log(error);
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
 
try {
        const username = req.authorization.username;
        const courseId = req.params.courseId;
        const user = await User.updateOne({
            username:username
        },{
            "$push":{
                purchasedCourses:courseId
            }
        }
    )
    res.status(200).json({
        user:user
    })
} catch (error) {
    console.log(error);
}

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.authorization.username;
    const user = await User.findOne({
        username
    })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.status(200).json({purchasedCourses:courses})
});

module.exports = router