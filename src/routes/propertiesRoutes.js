const express = require("express");
const router = express.Router();
const {log} = require("mercedlogger");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const propertiesController = require("../controllers/propertiesController.js");
const prisma = new PrismaClient();
const { isLoggedIn } = require("../../middlewares/middleware.js");
router.get("/", async(req, res) => {
	try{
		const allProperties = await propertiesController.getProperties()
        await prisma.$disconnect()
		res.send(allProperties)
    }catch(e){
		console.error(e)
        await prisma.$disconnect()
		res.status(400).send(e)
	}
})

router.post("/", isLoggedIn, async(req,res) => {
	log.yellow("STATUS","Creating Property...")
	const data = {
		title: req.body.title,
		description: req.body.description,
		address: req.body.address,
		propertyType: req.body.propertyType,
		bedrooms: req.body.bedrooms,
		bathrooms: req.body.bathrooms,
		area: req.body.area,
		rentAmount: req.body.rentAmount,
		available: req.body.available,
		city: req.body.city,
		state: req.body.state,
	}
	try{
		const newProperty = await propertiesController.createProperty(data)
		log.green("STATUS","Property created")	
		await prisma.$disconnect()
		res.send(newProperty)
	}catch(e){
		log.red("ERROR",e)
		await prisma.$disconnect()
		res.status(400).send(e)
	}
})
//Needs to search every parameter inserted
router.put("/", isLoggedIn, async (req,res)=>{
	log.yellow("STATUS","Updating Property...")
	try{
		const editedProp = await propertiesController.updateProperty(req.body.id)
		log.green("STATUS","Property Updated")
		await prisma.$disconnect()
		res.send(editedProp)
	}catch(e){
		log.red("STATUS",e)
		await prisma.$disconnect()
		res.status(500).send(e)
	}
})

router.delete("/", isLoggedIn,async(req,res)=>{
	log.yellow("STATUS","Deleting Property...")
	try{
		await propertiesController.deleteProperty(req.body.id)
		log.green("STATUS","Property Deleted")
		prisma.$disconnect
		res.send("Property Deleted")
	}catch(e){
		log.red("STATUS",e)
		prisma.$disconnect
		res.status(404).send(e)
	}
})

module.exports = router;
