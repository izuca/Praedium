const { log } = require("mercedlogger")
const { PrismaClient } = require("@prisma/client")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

//Create user
const createUser = async(data) => {
	const checkUser = await findUser(data.email)
	if(checkUser)
		log.red("ERROR","User already exists")
	else{
		const salt = bcrypt.genSaltSync(10);
		data.password = await bcrypt.hash(data.password,salt)
		const newUser = await prisma.user.create({data})
		log.green("STATUS","User created")
	}
}

//Find User by username
const findUser = async(email) => {
	const checkUser = await prisma.user.findUnique({
		where: {
			email
		},
	})
		
	return checkUser
}

module.exports = {
	createUser,
	findUser,
}
