const express = require('express');
const mongoose = require('mongoose');
const usermodel = require('../models/user');
const Course = require('../models/courses');
const router = express();


router.post('/user/courses/:useremail/newcourse', async (req, res) => {
    try {
        // console.log(req.params);
        // console.log(req.body);
        const { coursename } = req.body;

        const user = await usermodel.findOne({ email: req.params.useremail });
        console.log(user);
        const courseCreating = await Course.create({ name: coursename, owner: user.username });

        await user.courses.push(courseCreating);
        await user.save();
        console.log("done creating the new course");
        return res.status(200).json({ message: `Course with name ${coursename} has been successfully created` });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Someting wrong happened! Unable to create the course' });
    }
});

router.post('/user', async (req, res) => {
    try {
        console.log("trying to fetch the courses of the current user");
        const user = await usermodel.findOne({ email: req.body.email }).populate('courses');
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ msg: 'Something went wrong try to fetch the courses again' });
    }
})

module.exports = router;