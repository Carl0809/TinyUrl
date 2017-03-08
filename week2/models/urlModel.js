var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
    longUrl: String,
    shortUrl: String
});

var UrlModel = mongoose.model('UrlModel', UrlSchema);

module.exports = UrlModel;