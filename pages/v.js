import React from 'react'

export default ({ url: { query: { valid } } }) => {
	return (
		<div className="container">
			<h2 className="title">
				{valid ? 'Logged in successfully.' : 'Invalid token.'}
			</h2>
			{valid && <p>You may close this window.</p>}
			<style jsx>{`
				.title {
					font-weight: normal;
				}
				.container {
					height: 100vh;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
			`}</style>
		</div>
	)
}
