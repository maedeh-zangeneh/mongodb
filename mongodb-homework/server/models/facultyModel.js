const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  facultyGender: { type: String, required: true },
  ageInYears: { type: Number, required: true },
  jobType: { type: String, required: true },
  academicQualification: { type: String, required: true },
});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
