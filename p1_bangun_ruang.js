const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get("/kubus", (req,res) => {
    let rusuk = Number(req.body.rusuk)
    let luas = 6 * rusuk * rusuk
let volume = rusuk * rusuk * rusuk
    let response = {
    rusuk: rusuk,
    luas: luas,
    volume: volume
    }
    res.json(response)
    })

app.get("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas = 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi)
    let volume = panjang * lebar * tinggi
    let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    luas: luas,
    volume: volume
    }
    res.json(response)
    })

app.get("/bola", (req,res) => {
    let r = Number(req.body.r)
    let phi = 3.14
    let luas = 4 * phi * r^2
    let volume = 4/3 * phi * r^3
    let response = {
    jarijari: r,
    luas: luas,
    volume: volume
    }
    res.json(response)
    })

app.get("/tabung", (req,res) => {
    let r = Number(req.body.r)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan =(2*3.14*r^2)+(2*3.14*r^2)
    let volume = 3.14*r^2*tinggi
    let response ={
       jarijari: r,
       tinggi: tinggi,
       luas_permukaan: luas_permukaan,
       volume: volume
    }
    res.json(response)
    })


app.listen(8000, () => {
    console.log("Server run on port 8000");
    })
