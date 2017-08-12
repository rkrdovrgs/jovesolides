var express = require("express");
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('bakerydb', ['categories']);

router.post("/api/category", function (req, res) {
    console.log(req.body);

    db.categories.insert(req.body, function (err, result) {
        res.json(result);
    });
});

module.exports = router;