const express = require("express");
const router = express.Router();

const User = require("../models/user");

//     http://localhost:3000/api/v1/users
router.get("/", async (req, res) => {
    const usertList = await User.find();

    if (!usertList) {
        res.status(500).json({success: false})
    }
    res.send(usertList);
})

router.post(`/`, (req, res) => {
    const user = new User({
        name: req.body.name,
        image: req.body.name,
        countInStock: req.body.countInStock
    })

    user.save().then((createdUser => {
        res.status(201).json(createdUser)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;
