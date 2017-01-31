const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
res.send('<p>link to linkedIn</p>');


});


module.exports = router;
