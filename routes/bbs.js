const express = require('express');
const router = express.Router();


const controller = require('./bbs.controller');


router.get("/", controller.main)
router.post("/", controller.create)

router.get("/:id", controller.get)
module.exports = router;
