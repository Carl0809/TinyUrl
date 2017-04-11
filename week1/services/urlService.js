var longToshort = {};
var shortTolong = {};

var encode = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E",
"F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]     // ["a"....."z", "A" ...... "Z", "0"......"9"]

function getshortUrl(longUrl){
    if(longToshort[longUrl] != null)
    {
        return longToshort[longUrl];
    }
    else
    {
        var shortUrl = generateShortUrl();
        longToshort[longUrl] = shortUrl;
        shortTolong[shortUrl] = longUrl;
        return shortUrl;
    }

};

function getlongUrl(shortUrl){
    return shortTolong[shortUrl];
}

function generateShortUrl(){
    return converTo62(Object.keys(longToshort).length);
};

function converTo62(num){
    var result = "";
    do{
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    }while(num);
    return result;
}


module.exports = {
    getshortUrl,
    getlongUrl
};