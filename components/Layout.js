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
            --primary-dark: #3646EB;
            --primary-light: #7481FF;
            --secondary-dark: #36eb80;
            --secondary-light: #A4EBC2;
            --highlight: #FEF38B;
            --neutral-light: #FFFEF5;
            --neutral-dark: #CECECE;
          

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
        p.headline-body {
                    font-size: 1.8rem;
    margin-bottom: 2.4rem;
    font-family: var(--presicav);
                }

        h1 {
          font-family: var(--farm-new);
          font-size: 7.6rem;
    -webkit-text-stroke: 4px var(--primary-dark);
    -webkit-text-fill-color: rgba(255,255,255,0);
    text-shadow: 4px 3px 0px var(--primary-light);
    margin-bottom: 2.4rem;
        }

        img {
          width: 100%;
          border-radius: 6px;
        }
        div.container {
          width: 100vw;
          height: 100vh;
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