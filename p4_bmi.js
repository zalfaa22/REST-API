const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / tinggi^2
    let response 
        if(bmi<18.5){
            response={
                tinggi: tinggi,
                berat: berat,
                bmi: bmi,
                status:"Kekurangan berat badan"
    
            }
        }
        else if(18.5<=bmi<=24.9){
            response={
                tinggi: tinggi,
                berat: berat,
                bmi: bmi,
                status:"Normal (ideal)"
    
            }
        }
        else if(25.0<=bmi<=29.9){
            response={
                tinggi: tinggi,
                berat: berat,
                bmi: bmi,
                status:"Kelebihan berat badan"
    
            }
        }
        else if(30<=bmi){
            response={
                tinggi: tinggi,
                berat: berat,
                bmi: bmi,
                status:"Obesitas"
    
            }
        }
    res.json(response)
    })


app.listen(2910, () => {
    console.log("Server run on port 2910");
    })