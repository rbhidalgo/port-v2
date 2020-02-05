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
        :root {
            --presicav: presicav, sans-serif;
            --nimbus: nimbus-sans-extended, sans-serif;
            --farm-new: farm-new, sans-serif;
        }
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
          font-family: nimbus-sans-extended, sans-serif;
font-weight: 400;
font-style: normal;
          font-size: 1.5rem;
          line-height: 1.5;
          color: #333;
          animation: opening 2s ease-in-out;
        }
        div.container {
          width: 100vw;
        }
        main {
          width: 100vw;
        }
        @keyframes opening {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
        
      `}</style>
    </div>
)

export default Layout