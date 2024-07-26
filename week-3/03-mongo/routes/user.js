const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
  
    const newUser = await User.create({
        username:username,
        password:password,
    })
    console.log(newUser);
    res.status(200).json({msg:"User successfully created"})
});

router.get('/courses',async (req, res) => {
    const allCourses = await Course.find({});
    res.status(200).json({allCourses:allCourses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId,
        }
    })
    res.status(200).json({msg:"Purchased Successfully"});
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ username:username })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.status(200).json({
        msg:"Sent purchased courses successfully",
        purchasedCourses:courses
    })
});

module.exports = router