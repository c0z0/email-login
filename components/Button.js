import React from 'react'

const Button = ({ text, borderColor, onClick, disabled }) => [
	<input
		className={`button--primary ${disabled ? 'button--disabled' : ''}`}
		type="submit"
		text={text}
		value={text}
		disabled={disabled}
	/>,
	<style jsx>{`
		.button--primary {
			background: none;
			border: 1px solid ${borderColor || '#ff0080'};
			outline: none;
			padding: 8px;
			font-size: 14px;
			color: white;
			cursor: pointer;
			border-radius: 4px;
			transition: all 0.2s;
		}

		.button--primary:hover {
			background: ${borderColor || '#ff0080'};
		}

		.button--disabled {
			color: rgba(255, 255, 255, 0.3);
			border-color: rgba(255, 255, 255, 0.3);
			background-color: transparent !important;
			cursor: default;
		}
	`}</style>
]

export default Button
