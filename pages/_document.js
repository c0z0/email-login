import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link
						href="https://fonts.googleapis.com/css?family=Lato"
						rel="stylesheet"
					/>
					<meta name="theme-color" content="#000" />
					<title>Email login</title>
				</Head>
				<body>
					<style jsx global>{`
						body {
							margin: 0;
							font-family: Lato;
							color: white;
							background: black;
						}
					`}</style>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
