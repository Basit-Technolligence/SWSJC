var createError = require("http-errors");
var express = require("express");

var app = express();
var port = process.env.port || 5000;
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(port, () => {
  console.log("Server Connected");
});
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
