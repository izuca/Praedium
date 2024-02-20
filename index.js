require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const {log} = require("mercedlogger");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const propertiesController = require("./src/controllers/propertiesController.js");

const prisma = new PrismaClient();
const app = express();
const port = 8000;


app.use(morgan("Request"))

app.get("/", (req, res) => {
    console.log("Rodando");
    propertiesController.getProperties()
        .then(async()=>{
            console.log("Acessei Pagina Principal");
            await prisma.$disconnect()
        })
        .catch(async(e)=>{
            console.error(e)
            await prisma.$disconnect()
        })
    res.send("Bem vindo ao Praedium")
})

app.get("/add",(req,res) => {
	console.log("Adicionando...")
	propertiesController.createProperty()
		.then(async()=>{
			console.log("Propriedade adicionada com sucesso");
			await prisma.$disconnect()
		})
		.catch(async(e) => {
			console.error(e)
			await prisma.$disconnect()
		})
})
app.listen(port,() =>{
    
    console.log(`App running on  http://localhost:${port}`);
});

