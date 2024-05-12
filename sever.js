const express = require("express");
const cors = require("cors");
const fs = require("fs");
var bodyParser = require("body-parser");
const mongose = require("mongoose");
const mongoose = require(mongoose);
require("dotenv").config();

const bcrypt = require("bcrypt");
const setRounds = 10;

const db = process.env.MONGO_DB;
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:3000"}));
const Schema = mongoose.Schema;

mongoose.connect(process.evn.MONGO_DB).then(()=> console.log("connected!"));


const SignupModel = new Schema({
    email: "String",
    DOB: "Date",
    name: "String",
    fatherName: "String",
    gender: "String",
    password: "String",
});


const SignupMode = mongoose.model("signup", SignupModel);

app.post("/signup", async (req, res)=> {
    try {
        console.log(req.body);
        const {email, DOB, name, fatherName, gender, password} = req.body;

        if(!email){
            res.status(401).send({
                message: "email is require",
            });
        }else if(!password){
            res.status(401).send({
                message: "password is require",
            })
        }else{
                
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);

            console.log(email, "email");
            const result = new SomeModel({
                email: email,
                DOB: DOB, 
                naem: name, 
                fatherName: fatherName, 
                gender: gender, 
                password: hash,
            });
            result.save();
            res.send({
                status:  200,
                message: "Successfully save the Data",
                data: result
            });
        }
    }catch{
        res.send({
            status: 401,
            message: "Fail to save the date",
        });
    }
});

app.listen(PORT, function (){
    console.log("server is listing ont the post of" + PORT);
});


