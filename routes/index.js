var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('dashboard', {name: 'Dashboard', header: 'Premedit8ed'});
})

router.get('/news', function (req, res) {
    res.render('News', {name: 'News', header: 'Premedit8ed'});
})


module.exports = router;
