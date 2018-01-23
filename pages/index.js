import React, { Component } from 'react'

import EmailInput from '../components/EmailInput'
import Button from '../components/Button'

export default class Index extends Component {
	render() {
		return (
			<div className="container">
				<div className="form">
					<h3 className="title">Enter email to login:</h3>
					<EmailInput />
					<Button text="Continue" />
				</div>
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

					.title {
						font-weight: normal;
					}
				`}</style>
				<style jsx global>{`
					body {
						font-family: Menlo;
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
