const { log } = require("mercedlogger")
const { PrismaClient } = require("@prisma/client")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

//Create user
const createUser = async(data) => {
	try{
		const checkUser = await findUser(data.email)
		log.red("ERROR","User already exists")
		throw new Error("User already exists")

	}catch{
		const salt = bcrypt.genSaltSync(10);
		data.password = await bcrypt.hash(data.password,salt)
		const newUser = await prisma.user.create({data})
		log.green("STATUS","User created")
		return newUser
	}
}

//Find User by username
const findUser = async(email) => {
	const checkUser = await prisma.user.findUnique({
		where: {
			email
		},
	})
	console.log(checkUser)
	if(!checkUser)
		throw new Error("User not found")
	return checkUser
}

module.exports = {
	createUser,
	findUser,
}
