var express = require('express');
var app = express();
var postRouter = require("./routes/postRouter");   //     ./ means current responsitory  
var redirectRouter = require("./routes/redirectRouter");   

app.get('/', function (req, res) {
  res.send('This is very intersting')
});

//api.use("/api/v1", )
app.use("/api/v1", postRouter);

app.use("/:shortUrl",redirectRouter);                           //    after / is a vairbale 

app.listen(3000, function () {
  console.log('TinyUrl listening on port 3000!')
}); 