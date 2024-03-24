var http = require("http");
var fs = require("fs");
var express = require('express')
var app = express()
var bodyParser = require("body-parser");
const Port =5000

// var server = http.createServer((req, res) => {
 

//   res.end("Hello");
// });
// fs.writeFile("test.text", "My name is shahbaz yasin", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data, "line 16");
//   }
// });
// fs.readFile("test.text", "utf8", (err, data) => {
//   console.log("data===>", data);
// });
app.use(bodyParser.json());
let database= []

app.get("/signup", (req, res)=>{
    const {
        FName, LName, Email, Password,
    } = req.body;
    var data = database.push(req.body);

    res.send({
        status: 200,
        message: "Successfully send response",
    });

});


app.listen(Port, () => {
    console.log(`app is running on : ${Port} `);
  });