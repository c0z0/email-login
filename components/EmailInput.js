import React, { Component } from 'react'

export default class EmailInput extends Component {
	state = {
		focused: false
	}

	render() {
		const { borderColor, value, disabled } = this.props
		const { focused } = this.state

		return (
			<div
				className={`container ${focused ? 'container--focused' : ''} ${
					disabled ? 'container--disabled' : ''
				}`}
			>
				<input
					disabled={disabled}
					onBlur={() => this.setState({ focused: false })}
					onFocus={() => this.setState({ focused: true })}
					type="email"
					placeholder="Email..."
					className="input"
					value={value}
					onChange={e => this.props.onChange(e)}
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

					.container--disabled {
						border-color: rgba(255, 255, 255, 0.3) !important;
						color: rgba(255, 255, 255, 0.5);
					}

					.container--disabled .input {
						cursor: default;
						color: rgba(255, 255, 255, 0.3);
					}

					.input {
						background: transparent;
						color: white;
						flex: 1;
						margin: 0;
						border: none;
						font-size: 14px;
						padding: 8px;
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
