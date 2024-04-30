require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const propertiesRoutes = require("./src/routes/propertiesRoutes.js")
const usersRoutes = require("./src/routes/usersRoutes.js")
const app = express();
const port = 8000;

app.use(express.json())
app.use(morgan("Request"))
app.use("/properties",propertiesRoutes)
app.use("/users",usersRoutes)
app.get("/",(req,res)=>{
	res.send("Bem vindo ao Praedium")
})



app.listen(port,() =>{
    
    console.log(`App running on  http://localhost:${port}`);
});

