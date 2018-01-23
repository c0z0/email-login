const jwt = require('jsonwebtoken')
const { send } = require('micro')

const secrets = require('./secrets.json')

function generateSecret() {
	return (
		secrets.adjectives[Math.floor(Math.random() * secrets.adjectives.length)] +
		' ' +
		secrets.animals[Math.floor(Math.random() * secrets.animals.length)]
	)
}

async function handleLogin(res, { email }) {
	const token = await jwt.sign({ email }, 'test')

	const secret = generateSecret()

	console.log('http://localhost:3000/verify?token=' + token)

	return send(res, 200, { secret })
}

async function verify(res, token) {
	try {
		await jwt.verify(token, 'test')
		console.log('ok')
		return true
	} catch (e) {
		console.log(e)

		return false
	}
}

module.exports = { handleLogin, verify }
