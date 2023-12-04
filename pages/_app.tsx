import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Akash Kumar Seth</title>
			</Head>
			<Script src="/theme.js" strategy="beforeInteractive" />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
