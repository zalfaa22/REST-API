const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get("/ganjilgenap", (req,res) => {
    let bil = Number(req.body.bil)
    let response 
        if(bil%2 == 0){
            response={
            bilangan: bil,
            status: "Bilangan Genap"
            }
        }
        else{
            response={
            bilangan: bil,
            status: "Bilangan Ganjil" 
            }
        }
    res.json(response)
    })


app.listen(8000, () => {
    console.log("Server run on port 8000");
    })