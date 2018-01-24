const mailgun = require('mailgun-js')
const apiKey = process.env.MAILGUN_KEY
const host = process.env.HOST
const domain = 'email.cserdean.me' || 'http://localhost:3000'

module.exports = ({ to, secret, id }) =>
	new Promise((resolve, reject) => {
		const mailgunClient = mailgun({ apiKey, domain })

		const data = {
			from: 'Login Verification <email-login@email.cserdean.me>',
			to,
			subject: `Login Verification (code : ${secret})`,
			html: `Hello. We have received a login attempt with the following code: <b>${secret}</b>. To complete the login process, please follow this <a href="${host}/complete?i=${id}">link.</a>`
		}

		mailgunClient.messages().send(data, function(error, body) {
			if (error) return reject(error)
			resolve(body)
		})
	})
