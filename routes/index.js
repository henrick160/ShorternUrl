/**
 * Created by Tibbers on 8/13/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.sendfile('./public/view/index.html');
});

module.exports = router;