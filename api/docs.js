var axios = require('axios');
var express = require("express");
var router = express.Router();

router.get("/docs/:docId", function (req, res) {
    axios.get(`https://docs.google.com/feeds/download/documents/export/Export?id=${req.params.docId}&exportFormat=html`)
        .then(response => {
            res.json({ content: response.data });
        });
});

module.exports = router;