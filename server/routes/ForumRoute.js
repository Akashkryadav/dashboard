/* eslint-disable no-undef */
const express = require('express');
const FormData = require('../models/ForumModel');

const router = express.Router();

// POST request to add form data
router.post('/', async (req, res) => {
    try {
        const newFormData = new FormData(req.body);
        await newFormData.save();
        res.status(201).json(newFormData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET request to retrieve all form data
router.get('/', async (req, res) => {
    try {
        const formData = await FormData.find();
        res.status(200).json(formData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
