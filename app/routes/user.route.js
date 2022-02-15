

const express = require('express');
const {validationResult} = require('express-validator');
const { getUser, getAllUsers, getUserByCode, createUser, deleteUser, patchUser } = require('../controllers/user.controller');

const router= express.Router();

const User= require('../models/user.model');
const upload = require('../utils/fileUpload');
const validateUser = require("../utils/validateUser");

// ? pagination
// ? limit, skip

router.get("/", getAllUsers)

router.get("/:user_id", getUser)

router.get("/code/:code", getUserByCode)


router.post("/", ...validateUser(), upload.single("avatar") , createUser)

router.delete("/:user_id", deleteUser)

router.patch("/:user_id", patchUser)


module.exports = router;