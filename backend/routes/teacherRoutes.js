const express = require("express");
const router = express.Router();

const add = require("../controllers/teachers");

router.post('/addTeacher', add.addTeacher);
router.get('/getTeacher', add.getTeacher);
router.get("/teachers/:id", add.getTeacherbyId);
router.delete("/teachers/:id", add.deleteTeacher);

module.exports = router;