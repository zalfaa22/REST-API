const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/konversi_bilangan/decimal", (req,res) => {
    let bil = Number(req.body.bil)
    let biner = bil.toString(2)
    let octal = bil.toString(8)
    let hexa = bil.toString(16)
    let response = {
    decimal: bil,
    result: {
    biner: biner,
    octal: octal,
    hexadecimal: hexa
    }}
    res.json(response)
    })

app.get("/konversi_bilangan/biner", (req,res) => {
    let bil = Number(req.body.bil)
    let decimal = parseInt(bil, 2)
    let octal = parseInt(bil, 2).toString(8)
    let hexa = parseInt(bil, 2).toString(16)
    let response = {
    biner: bil,
    result: {
    decimal: decimal,
    octal: octal,
    hexadecimal: hexa
    }}
    res.json(response)
    })

app.get("/konversi_bilangan/octal", (req,res) => {
    let bil = Number(req.body.bil)
    let decimal = parseInt(bil,8)
    let biner = parseInt(bil,8).toString(2)
    let hexa = parseInt(bil,8).toString(16)
    let response = {
    octal: bil,
    result: {
    decimal: decimal,
    biner: biner,
    hexadecimal: hexa
    }}
    res.json(response)
    })

app.get("/konversi_bilangan/hexa", (req,res) => {
    let bil = Number(req.body.bil)
    let decimal = parseInt(bil, 16)
    let biner = parseInt(bil, 16).toString(2)
    let octal = parseInt(bil, 16).toString(8)
    let response = {
    hexadecimal: bil,
    result: {
    decimal: decimal,
    biner: biner,
    octal: octal,
    }}
    res.json(response)
    })


app.listen(8000, () => {
    console.log("Server run on port 8000");
    })