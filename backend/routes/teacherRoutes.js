const express = require("express");
const router = express.Router();

const add = require("../controllers/teachers");


router.post('/addTeacher', add.addTeacher);


module.exports = router;