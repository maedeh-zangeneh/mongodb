const express = require('express');
const { fetchAllFaculty, createNewFaculty, removeFacultyById, modifyFacultyById } = require('../controllers/facultyController');
const router = express.Router();


router.get('/', fetchAllFaculty);


router.post('/', createNewFaculty);


router.delete('/:id', removeFacultyById);


router.patch('/:id', modifyFacultyById);

module.exports = router;
