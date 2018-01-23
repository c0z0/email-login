const micro = require('micro')
const match = require('micro-route/match')
const { parse } = require('url')
const next = require('next')

const { handleLogin, verify } = require('./server/handleLogin')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = micro(async (req, res) => {
	const parsedUrl = parse(req.url, true)
	const { query } = parsedUrl

	if (match(req, '/api/login', 'POST')) {
		const json = await micro.json(req)
		return await handleLogin(res, json)
	}
	if (match(req, '/verify', 'GET') && query.token) {
		const valid = await verify(res, query.token)

		return app.render(req, res, '/v', { valid })
	}

	return handle(req, res, parsedUrl)
})

app.prepare().then(() => {
	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
