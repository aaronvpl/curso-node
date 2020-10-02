const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

// Invoca Express
const app = express();

// Conecta Base de Datos
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });
        console.log('Conectado a Base de Datos');
    } catch (error) {
        console.log('Se ha producido una Excepcion con la conexion a Base de Datos', error);
    }
}

//Ejecuta Conector
db();

//Ocupa los Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Obtiene Puerto si Falla u ocupado asigna 8000
const port = process.env.PORT || 8000;

// El Puerto a la Escucha
app.listen(port, () => {
    console.log(` El sevidor esta Ejecutandose en el Puerto ${port}`);
});