const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post("/convert/celcius/:angka", (req,res) => {
    let angka = Number(req.params.angka)
    let reamur = 4/5 * angka
    let kelvin = angka + 273
    let fahrenheit = 9/5 * angka + 32
    let response = {
    celcius: angka,
    result: {
    reamur: reamur,
    kelvin: kelvin,
    fahrenheit: fahrenheit
    }}
    res.json(response)
    })

app.post("/convert/reamur/:angka", (req,res) => {
    let angka = Number(req.params.angka)
    let celcius = 5/4 * angka
    let kelvin = celcius + 273
    let fahrenheit = 9/4 * angka + 32
    let response = {
    reamur: angka,
    result: {
    celcius: celcius,
    kelvin: kelvin,
    fahrenheit: fahrenheit
    }}
    res.json(response)
    })

app.post("/convert/kelvin/:angka", (req,res) => {
    let angka = Number(req.params.angka) 
    let celcius = angka-273
    let reamur = 4/5*(angka-273)
    let fahrenheit = 9/5*(angka-273)+32 
    let response = {
    kelvin:angka,
    result: {
    celcius: celcius,
    reamur: reamur,
    fahrenheit: fahrenheit    
    }}
    res.json(response)
    })
    
app.post("/convert/fahrenheit/:angka", (req,res) => {
    let angka = Number(req.params.angka) 
    let celcius = 5/9*(angka-32)
    let reamur = 4/9*(angka-32)
    let kelvin = 5/9*(angka-32)+273
    let response = {
    fahrenheit: angka,
    result: {
    celcius: celcius,
    reamur: reamur,
    kelvin: kelvin
    }}
    res.json(response)
    })


app.listen(8000, () => {
    console.log("Server run on port 8000");
    })
