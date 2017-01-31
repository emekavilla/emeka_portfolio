const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
res.send('I AM A FULL STACK WEB DEVELOPER EQUIPPED WITH THE SKILLS TO CREATE WEB APPS.');
});


module.exports = router;
