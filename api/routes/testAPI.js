const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send({response: 'API is working properly'});
});

module.exports = router;
