const micro = require('micro')
const match = require('micro-route/match')
const { parse } = require('url')
const next = require('next')

const {
	handleLogin,
	completeLogin,
	verifyLogin
} = require('./server/handleLogin')

const logins = []
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = micro(async (req, res) => {
	const parsedUrl = parse(req.url, true)
	const { query } = parsedUrl

	if (match(req, '/login', 'POST')) {
		const json = await micro.json(req)
		const l = handleLogin(json, logins)

		return micro.send(res, 200, l)
	}
	if (match(req, '/complete', 'GET') && query.i) {
		const valid = completeLogin(query.i, logins)

		return app.render(req, res, '/c', { valid, fromServer: true })
	}

	if (match(req, '/verify', 'POST')) {
		const { id } = await micro.json(req)

		const complete = verifyLogin(id, logins)

		return micro.send(res, 200, { complete })
	}

	return handle(req, res, parsedUrl)
})

app.prepare().then(() => {
	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
