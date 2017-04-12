var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    urlService.getLongUrl(shortUrl, function(url) {
        if (url) {
            res.redirect(url.longUrl);
        } else {
            res.send("No such URL");
            // TODO: Payson: add 404
        }
    });
});

module.exports = router;