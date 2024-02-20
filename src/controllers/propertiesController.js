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
const createProperty = async()=>{
	const property = await prisma.properties.create({
		data: {
			title: "Casa aconchegante perto do parque",
			description: "Uma casa encantadora com jardim",
			address: "Rua das Flores,123",
			propertyType:"Casa",
			rentAmount: 2000.00,
			available: true,
			city: "Anápolis",
			state: "Goiás"
		}
	})

	console.log("propriedade criada")
}

//Update
const updateProperty = async(propId) =>{
	const id = parseInt(propId,10)
	const property = await prisma.properties.update({
		where:{
			id: id
		},
		data: {
			title: "Nome alterado"
		}
	})
	console.log("Alterado com sucesso")
}

//Delete
const deleteProperty = async(propId) => {
	const id = parseInt(propId,10)
	const property = await prisma.properties.delete({
		where:{
			id:id
		}
	})
	console.log("Propriedade deletada")

}

module.exports = {
	getProperties,
	createProperty,
	updateProperty,
	deleteProperty
}
