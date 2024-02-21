const express = require("express");
const router = express.Router();
const { log } = require("mercedlogger");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const usersController = require("../controllers/usersController.js");

const prisma = new PrismaClient()

router.get("/", (req, res) => {
    log.yellow("STATUS","Checking User")
	usersController.findUser(req.body.email)
        .then(async()=>{
            log.green("STATUS","User found")
			await prisma.$disconnect()
        })
        .catch(async(e)=>{
            console.error(e)
            await prisma.$disconnect()
        })
})

router.post("/",(req,res) => {
	log.yellow("STATUS","Creating User...")
	const data = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		type: req.body.type
	}
	usersController.createUser(data)
		.then(async()=>{
			await prisma.$disconnect()
		})
		.catch(async(e) => {
			console.error(e)
			await prisma.$disconnect()
		})
})
/*
router.put("/:id",(req,res)=>{
	log.yellow("STATUS","Updating Property...")
	propertiesController.updateProperty(req.params.id)
		.then(async()=>{
			log.green("STATUS","Property Updated")
			await prisma.$disconnect()
		})
		.catch(async(e)=>{ 
			console.error(e)
			await prisma.$disconnect()
		})
})

router.delete("/:id",(req,res)=>{
	log.yellow("STATUS","Deleting Property...")
	propertiesController.deleteProperty(req.params.id)
		.then(async()=>{
			log.green("STATUS","Property Deleted")
			prisma.$disconnect
		})
		.catch(async(e) => {
			console.error(e)
			prisma.$disconnect
		})
})
*/
module.exports = router;
