import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title }) => (
	<>
		<Head>
			<title>{title}</title>
			<link rel='stylesheet' href='https://use.typekit.net/juf8edt.css'></link>
		</Head>
		<Navbar />
		<>{children}</>
		<Footer />
		<style jsx global>{``}</style>
	</>
)

export default Layout
