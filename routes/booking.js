const express = require('express');
const router = express.Router();

/* GET booking page. */
router.get('/', function(req, res) {
  res.render('booking');
});

module.exports = router;
