/* eslint-disable no-undef */
const DataModel = require('../models/ForumModel');

// Get all data entries
const getAllData = async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};

// Add a new data entry
const addData = async (req, res) => {
  try {
    const { name, email, company } = req.body;
    const newData = new DataModel({ name, email, company });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: 'Error adding data', error });
  }
};
module.exports ={
  getAllData,
  addData
}