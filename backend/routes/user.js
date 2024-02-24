const User = require('../models/User');
const express = require('express');
const router = express.Router(); // Add parentheses to call express.Router()

// Route to register a new user
router.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        totalCarbonEmissions: req.body.totalCarbonEmissions,
        points: req.body.points,
        vehicle: req.body.vehicle
    });

    // Save the new user to the database
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ message: 'Error registering user', error: err }));
});

// Other routes can go here if needed

module.exports = router;
