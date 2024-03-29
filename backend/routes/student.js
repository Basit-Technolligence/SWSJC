const studentController = require("../controllers/student");
const express = require("express");
const router = express.Router();

router.post("/students", studentController.addStudent);
router.get("/students/:id", studentController.getStudentById);
router.get("/students", studentController.getStudent);
router.patch("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);
router.post('/getChallan',studentController.exportPDF);
router.post('/addclassresult',studentController.addClassResult);
router.get("/getStudentResults/:studentId", studentController.getClassResultById);
module.exports = router;
