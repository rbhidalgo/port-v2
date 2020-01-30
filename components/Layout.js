import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children, title}) => (
    <>
        <Head>
<title>{title}</title>
        </Head>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
        <style jsx global>{`
        * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
            html{
                /* 1 rem will equal 10px */
	              font-size: 62.5%;
            }
        body {
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 1.6rem;
          line-height: 1.5;
          color: #333;
        }
        main {
          max-width: 90%;
    margin: 0 auto;
        }
        
      `}</style>
    </>
)

export default Layout