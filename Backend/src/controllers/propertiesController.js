const {log} = require("mercedlogger")
const { PrismaClient } = require("@prisma/client")
const { Router } = require("express")

const prisma = new PrismaClient()

//Read All
const getProperties = async()=>{
	const allImoveis = await prisma.properties.findMany();
	console.log(allImoveis)
}


//Create
const createProperty = async(data)=>{
	try{
		const property = await prisma.properties.create({data})
		return property
	}catch(e){
		throw new Error(e)
	}
}

//Update - Need to be more flexible
const updateProperty = async(propId) =>{
	const id = parseInt(propId,10)
	try{
		const property = await prisma.properties.update({
			where:{ id },
			data: { title: "Nome alterado"	}
		})
		return property
	}catch(e){
		throw new Error(e)
	}
}

//Delete
const deleteProperty = async(propId) => {
	const id = parseInt(propId,10)
	try{
		const property = await prisma.properties.delete({
		where:{ id }
		})
		return property
	}catch(e){
		throw new Error(e)
	}

}

module.exports = {
	getProperties,
	createProperty,
	updateProperty,
	deleteProperty
}
