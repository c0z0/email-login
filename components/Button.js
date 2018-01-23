import React from 'react'

const Button = ({ text, borderColor, onClick }) => [
	<button className="button--primary" onClick={onClick}>
		{text}
	</button>,
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
	`}</style>
]

export default Button
