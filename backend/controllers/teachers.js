const express = require('express');
const Admin = require("../models/admin");
const db = require('../database/admin');
const { response } = require('express');


const addTeacher = async (req, res) => {
    try {
      await db.collection("teachers").add(req.body);
      res.send("Data Added");
    } catch (e) {
      res.send(e);
    }
  };

exports.addTeacher = addTeacher;