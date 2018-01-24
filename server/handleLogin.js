const shortid = require('shortid')
const { send } = require('micro')

const sendMail = require('./sendMail')
const secrets = require('./secrets.json')

const isMailActive = process.env.MAILGUN_KEY && true

function generateSecret() {
	let adjective =
		secrets.adjectives[Math.floor(Math.random() * secrets.adjectives.length)]
	let animal =
		secrets.animals[Math.floor(Math.random() * secrets.animals.length)]

	animal = animal[0].toUpperCase() + animal.slice(1)
	adjective = adjective[0].toUpperCase() + adjective.slice(1)
	return adjective + ' ' + animal
}

async function handleLogin({ email }, logins) {
	const secret = generateSecret()

	const id = shortid.generate()
	const publicId = shortid.generate()

	if (isMailActive) {
		await sendMail({ to: email, secret, id })
		console.log('Sent mail ' + secret)
	} else console.log('http://localhost:3000/complete?i=' + id)

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
