var express = require('express');
var router = express.Router();
const pool = require('../database/pool');
const BoardQuery = require('../queries/board-query')

const User = require('../models').User;

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.error(e);
    next(e);
  }
});


router.get('/:boardId', async (req, res, next) => {
  let {boardId} = req.params;
  try {
    const data = await pool.query(BoardQuery.getBoard, [boardId]);
    return res.json(data[0]);
  } catch (e) {
    return res.status(500).json(e);
  }
});
module.exports = router;
