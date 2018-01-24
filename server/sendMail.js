const mailgun = require('mailgun-js')

const emailTemplate = require('./emailTemplate')

const apiKey = process.env.MAILGUN_KEY
const host =
	process.env.HOST || 'http://localhost:' + (process.env.PORT || 3000)
const domain = 'email.cserdean.me'

module.exports = ({ to, secret, id }) =>
	new Promise((resolve, reject) => {
		const mailgunClient = mailgun({ apiKey, domain })

		const data = {
			from: 'Login Verification <email-login@email.cserdean.me>',
			to,
			subject: `Login Verification (code : ${secret})`,
			//html: `Hello. We have received a login attempt with the following code: <b>${secret}</b>. To complete the login process, please follow this <a href="${host}/complete?i=${id}">link.</a>`,
			html: emailTemplate({ link: `${host}/complete?i=${id}`, secret })
		}

		mailgunClient.messages().send(data, function(error, body) {
			if (error) return reject(error)
			resolve(body)
		})
	})
