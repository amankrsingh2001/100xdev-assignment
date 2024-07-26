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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router