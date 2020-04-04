import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children, title}) => (
    <div className="container">
        <Head>
<title>{title}</title>
<link rel="stylesheet" href="https://use.typekit.net/juf8edt.css"></link>
        </Head>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
        <style jsx global>{`

      `}</style>
    </div>
)

export default Layout