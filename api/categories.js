var express = require("express");
var router = express.Router();


router.get("/categories", function (req, res) {
    res.json({
        message: "success :)"
    })
});

module.exports = router;