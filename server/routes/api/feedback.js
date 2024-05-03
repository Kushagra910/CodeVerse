const express = require('express');
const Feedback = require('../../model/Feedback');
const router = express.Router();


router.post('/' ,async (req,res) => {
     try{
        const {email, message} = req.body;
        const newFeedback = new Feedback({
            email,
            message
        });
        await newFeedback.save();
        res.status(201).json({
            message: 'Feedback saved successfully'
        });
     }
     catch (err) {
        console.log(err);
        return res.status(500).json({
            message:"Internal Server error"
        })
     }
} );

module.exports = router;