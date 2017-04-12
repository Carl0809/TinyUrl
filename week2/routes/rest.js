var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");

router.post("/urls", jsonParser, function (req, res) {
    var longUrl = req.body.longUrl;
    if (longUrl.indexOf("http") === -1) {
        longUrl = "http://" + longUrl;
    }
    urlService.getShortUrl(longUrl, function(url) {
        res.json(url);
    });
});

module.exports = router;