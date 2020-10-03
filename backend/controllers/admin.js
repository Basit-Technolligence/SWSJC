const Admin = require("../models/admin");

const addAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(200).send("Inserted Successfully");
  } catch (e) {
    res.send("Fail to Insert");
  }
};

const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body);
    if (!admin) {
      return res.send("Invalid Data");
    }
    res.send("Updated Successfully");
  } catch (e) {
    res.send("Fail to Update");
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.send("Invalid Data");
    }
    res.send("Deleted Successfully");
  } catch (e) {
    res.send("Fail to Delete");
  }
};

exports.addAdmin = addAdmin;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;
