import React from 'react'

export default ({ url: { query: { valid } } }) => {
	return <h1>{valid ? 'yay' : 'nay'}</h1>
}
