const express = require("express");
const cors = require("cors");

const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{

    res.send("CoinEmpire API работает");

});

app.listen(3000,()=>{

    console.log("Server started");

});
