const express = require("express");
const port = 5000
const connectDB = require("./config/database");
const dotenv = require("dotenv").config();
//connection db

connectDB();


const app = express();
//middleware qui permet de traiter les données de la request"
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use("/post", require("./routes/post.routes"));

//Lancement du serveur 
app.listen(port, () => console.log("Le server est sur le port " + port));