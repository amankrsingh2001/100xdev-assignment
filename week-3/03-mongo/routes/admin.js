const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const adminExist = await Admin.findOne({
        username:username,
        password:password,
    })
    if(adminExist){
        res.status(403).json({msg:"User Already exist"})
    }else {
        await Admin.create({
            username:username,
            password:password
        })

        res.status(200).json({msg:"Admin created Successfully"})
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink= req.body.imageLink
    const newCourse =  await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
    })
    res.status(200).json({msg:'Course created successfully',courseId:newCourse._id})
});

router.get('/courses', adminMiddleware,async (req, res) => {
    const allCourses = await Course.find({})
    res.status(400).json({courses:allCourses})
});

module.exports = router;