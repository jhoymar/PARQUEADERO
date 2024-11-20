const express = require('express');

const router = express.ARouter();

router.get('/', function(req, res){
    res.send('carros ok')
});

module.exports = router