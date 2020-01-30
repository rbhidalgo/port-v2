import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children, title}) => (
    <main>
        <Head>
<title>{title}</title>
        </Head>
        <Navbar />
        <div>
        {children}
        </div>
        <Footer />
        <style jsx global>{`
            html{
                margin: 0;
                padding: 0;
            }
        body {
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: #333;
        }
      `}</style>
    </main>
)

export default Layout