import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content='Rogelio Hidalgo, Full Stack Web Developer with a eye for UI/UX focusing on front-end development with the ability to be flexible and adapt to various projects.'
			/>
			<link rel='stylesheet' href='https://use.typekit.net/juf8edt.css'></link>
			<link rel='shortcut icon' href='/img/rhidalgo.ico' />

			<meta property='og:title' content={title} />
			<meta
				property='og:description'
				content='Rogelio Hidalgo, Full Stack Web Developer with a eye for UI/UX focusing on front-end development with the ability to be flexible and adapt to various projects.'
			/>
			<meta
				property='og:image'
				content='/img/rhidalgo-social-share-image.jpg'
			/>
			<meta property='og:url' content='https://rhidalgo-portv2.now.sh/' />
		</Head>
		{/* <Navbar /> */}
		<>{children}</>
		<Footer />
		<style jsx global>{``}</style>
	</>
)

export default Layout
