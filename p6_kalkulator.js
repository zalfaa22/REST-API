const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


// NOMER PERTAMA
app.post("/kalkulator", (req,res) => {
    let bil1 = Number(req.body.bil1)
    let bil2 = Number(req.body.bil2)
    let penjumlahan = bil1 + bil2
    let pengurangan = bil1 - bil2
    let perkalian = bil1 * bil2
    let pembagian = bil1 / bil2
    let response = {
    bilangan_pertama: bil1,
    bilangan_kedua: bil2,
    result: {
    penjumlahan: penjumlahan,
    pengurangan: pengurangan,
    perkalian: perkalian,
    pembagian: pembagian
    }}
    res.json(response)
    })


// NOMER KEDUA
app.post("/perulanganFor",(req,res)=>{
    let awal = Number(req.body.awal)
    let akhir = Number(req.body.akhir)
    let kelipatan = Number(req.body.kelipatan)
    let i
    let tampung = new Array()
    let total = 0;
    for (i=awal; i<=akhir; i+=kelipatan){
        tampung.push(i)
        total += i
    }
    let response = {
        tampung,
        total: total
    }
    res.json(response)
    })


// NOMER KETIGA
app.post("/penjumlahan_array",(req,res)=>{
    let matrixA = [
        [2, 6],
        [1, 4]
    ];
    let matrixB = [
        [4, 2],
        [4, 5]
    ];
    let hasil = new Array()
    let i
    let j
    for (i=0; i<2; i++){
        for (j=0; j<2; j++){
            hasil.push(matrixA[i][j] + matrixB[i][j])
        }
    }
    let response = {
        matrixA: matrixA,
        matrixB: matrixB,
        penjumlahan: hasil
    }
    res.json(response)
    })



app.listen(8000, () => {
    console.log("Server run on port 8000");
    })