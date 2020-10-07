const express = require("express");
const router = express.Router();
const adminController = requrie("../controllers/admin");

router.post("/admin", adminController.addAdmin);
router.patch("/admin/:id", adminController.updateAdmin);
router.delete("/admin/:id", adminController.deleteAdmin);

module.exports = router;
