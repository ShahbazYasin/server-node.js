var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
 

  res.end("hello world!5165");
});
fs.writeFile("test.text", "My name is shahbaz yasin", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "line 16");
  }
});
fs.readFile("test.text", "utf8", (err, data) => {
  console.log("data===>", data);
});
server.listen(8000, () => {
  console.log("server is running");
});