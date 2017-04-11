var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jasonParser = bodyParser.json();
var urlService = require("../services/urlService");


router.post("/urls",jasonParser,function(req, res){
    var longUrl = req.body.longUrl;
    if (longUrl.indexOf("http") === -1) {
        longUrl = "http://" + longUrl;
    }
    var shortUrl  = urlService.getshortUrl(longUrl);     // getshortUrl in urlService.js
    res.json({                                 // no need to use res.send() since express did everything for you!!!!
        shortUrl: shortUrl,
        longUrl: longUrl
    })
});


module.exports = router;     //let other file to use this function 
