import React, { Component } from 'react'

export default class EmailInput extends Component {
	state = {
		email: '',
		focused: false
	}

	render() {
		const { borderColor } = this.props
		const { email, focused } = this.state

		return (
			<div className={`container ${focused ? 'container--focused' : ''}`}>
				<input
					onBlur={() => this.setState({ focused: false })}
					onFocus={() => this.setState({ focused: true })}
					type="email"
					placeholder="Email..."
					className="input"
					value={email}
					onChange={({ target: { value: email } }) => this.setState({ email })}
				/>
				<style jsx>{`
					.container {
						width: 100%;
						display: flex;
						border: 1px solid #eee;
						border-radius: 4px;
						transition: all 0.2s;
						padding: 2px;
					}

					.container--focused,
					.container:hover {
						border-color: ${borderColor};
					}

					.input {
						background: transparent;
						color: white;
						flex: 1;
						margin: 0;
						border: none;
						font-size: 14px;
						padding: 8px 8px;
						outline: none;
						width: 100%;
					}
				`}</style>
			</div>
		)
	}
}

EmailInput.defaultProps = {
	borderColor: '#ff0080'
}
