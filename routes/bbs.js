const express = require('express');
const router = express.Router();


const controller = require('./bbs.controller');


router.get("/", controller.main)
module.exports = router;
