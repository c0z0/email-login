import React, { Component } from 'react'

import EmailInput from '../components/EmailInput'
import Button from '../components/Button'

export default class Index extends Component {
	state = {
		email: '',
		secret: false,
		waiting: false,
		loggedIn: false,
		loading: false
	}
	async submit() {
		const { email } = this.state

		const req = await fetch('/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		})

		if (!req.ok) {
			return this.setState({ error: true })
			console.log('error')
		}

		const data = await req.json()

		this.setState({ secret: data.secret, publicId: data.publicId })

		this.interval = setInterval(this.verify.bind(this), 3000)
	}

	async verify() {
		const { publicId } = this.state

		this.setState({ waiting: true })

		const req = await fetch('/verify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: publicId })
		})

		if (!req.ok) {
			return this.setState({ error: true })
		}

		const { complete } = await req.json()

		if (complete === true) {
			clearInterval(this.interval)
			this.setState({ loggedIn: true })
		}
	}

	renderForm() {
		const { email, error } = this.state

		return [
			<h2 className="title">Login to get started</h2>,
			<div>
				<EmailInput
					value={email}
					onChange={({ target: { value: email } }) => this.setState({ email })}
				/>
				{error && <p className="error">An error occurred.</p>}
			</div>,
			<Button text="Continue" onClick={this.submit.bind(this)} />,
			<style jsx>{`
				.error {
					color: #ff0080;
				}

				.title {
					font-weight: normal;
				}
			`}</style>
		]
	}

	renderLoggedIn() {
		const { email } = this.state
		return [
			<h2 className="title">
				Logged in as {email}{' '}
				<style jsx>{`
					.title {
						font-weight: normal;
					}
				`}</style>
			</h2>
		]
	}

	renderConfirm() {
		const { secret, waiting, error } = this.state

		return [
			<h2 className="title">Login to get started</h2>,
			,
			<div>
				<p className="instructions">We sent an email to {this.state.email}.</p>
				<p className="instructions">
					Go to your inbox, verify that the security code matches{' '}
					<span className="code">{secret}</span> and follow the link.
				</p>
				{error && <p className="error">An error occurred.</p>}
			</div>,
			<a
				className="undo"
				onClick={() => {
					this.setState({ secret: false })
					clearInterval(this.interval)
				}}
			>
				Undo
			</a>,
			<style jsx>{`
				.error {
					color: #ff0080;
				}
				.undo {
					cursor: pointer;
					text-decoration: underline;
					color: #ff0080;
					text-align: right;
				}

				.title {
					font-weight: normal;
				}

				.code {
					color: #ff0080;
				}
			`}</style>
		]
	}

	render() {
		const { secret, loggedIn } = this.state

		let content = null

		if (!secret) content = this.renderForm()
		else if (!loggedIn) content = this.renderConfirm()
		else content = this.renderLoggedIn()

		return (
			<div className="container">
				<form
					onSubmit={e => {
						e.preventDefault()
						if (!secret) this.submit()
					}}
				>
					<div className="form">{content}</div>
				</form>
				<style jsx>{`
					.container {
						display: flex;
						height: 100vh;
						align-items: center;
						justify-content: center;
					}

					.form {
						display: flex;
						justify-content: space-between;
						flex-direction: column;
						width: 40vw;
						height: 75vh;
						border: #fff solid 1px;
						padding: 20px;
						border-radius: 4px;
					}
				`}</style>
				<style jsx global>{`
					body {
						font-family: Lato;
						margin: 0;
						padding: 0;
						background: black;
						color: white;
					}
				`}</style>
			</div>
		)
	}
}
