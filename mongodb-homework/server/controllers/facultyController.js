const Faculty = require('../models/facultyModel');


const fetchAllFaculty = async (req, res) => {
  try {
    const allFacultyMembers = await Faculty.find();
    res.status(200).json(allFacultyMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createNewFaculty = async (req, res) => {
  try {
    const facultyDetails = new Faculty(req.body);
    const savedFaculty = await facultyDetails.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const removeFacultyById = async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Faculty member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const modifyFacultyById = async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchAllFaculty,
  createNewFaculty,
  removeFacultyById,
  modifyFacultyById,
};
