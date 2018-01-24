const shortid = require('shortid')
const { send } = require('micro')

const secrets = require('./secrets.json')

function generateSecret() {
	return (
		secrets.adjectives[Math.floor(Math.random() * secrets.adjectives.length)] +
		' ' +
		secrets.animals[Math.floor(Math.random() * secrets.animals.length)]
	)
}

function handleLogin({ email }, logins) {
	const secret = generateSecret()

	const id = shortid.generate()
	const publicId = shortid.generate()

	console.log('http://localhost:3000/complete?i=' + id)

	logins.push({ secret, id, email, complete: false, publicId })

	return { secret, publicId }
}

function completeLogin(id, logins) {
	const i = logins.findIndex(l => l.id === id)
	if (i > -1) {
		logins[i].complete = true
		return true
	}
	return false
}

function verifyLogin(id, logins) {
	const i = logins.findIndex(l => l.publicId === id)
	return i > -1 && logins[i].complete
}

module.exports = { handleLogin, completeLogin, verifyLogin }
