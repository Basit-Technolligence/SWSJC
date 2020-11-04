const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.post("/login", adminController.login);
router.get("/logout", adminController.logout);
router.get("/authentication", adminController.authListen);
router.post('/addLogin',adminController.addLogin);
module.exports = router;
