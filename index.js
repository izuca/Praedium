require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const {log} = require("mercedlogger");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = 8000;

async function main(){
    const allImoveis = await prisma.imoveis.findMany();
    console.log(allImoveis)
}



app.use(morgan("Request"))

app.get("/", (req, res) => {
    console.log("Rodando");
    main()
        .then(async()=>{
            console.log("oiiiiiii");
            await prisma.$disconnect()
        })
        .catch(async(e)=>{
            console.error(e)
            await prisma.$disconnect()
        })
    res.send("Bem vindo ao Praedium")
})

app.listen(port,() =>{
    
    console.log("Aplicativo rodando na porta ${port}");
});

