var express = require('express');
var router = express.Router();
const pool = require('../database/pool');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:boardId', async (req, res, next) => {
  let {boardId} = req.params;
  try {
    const sql = 'select * from i_bbs_default where nid=?';
    const data = await pool.query(sql, [boardId]);
    return res.json(data[0]);
  } catch (e) {
    return res.status(500).json(e);
  }
});
module.exports = router;
