var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");


router.get("*",function(req, res){         //"*" get everything
    var shortUrl = req.originalUrl.slice(1);         //originalUrl is used to get the shortUrl from the user    e.g "/asdjfa" including the slash. slice(1) is used to delete the fisrt slash. 
    var longUrl = urlService.getlongUrl(shortUrl);
    if(longUrl){
        res.redirect(longUrl);                   //redirect to the longUrl which come from getlongUrl(shortUrl);
    }
    else{
        res.send("No such longUrl");
    }
});


module.exports = router;     //let other file to use this function 
