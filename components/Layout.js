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
            /* colors */
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
          overflow-x: hidden;
          font-family: nimbus-sans-extended, sans-serif;
          font-weight: 400;
          font-style: normal;
          background-color: var(--neutral-light);
          font-size: 1.5rem;
          line-height: 1.75;
          color: #333;
          animation: opening 2s ease-in-out;
        }
        p.headline-body {
          font-size: 1.8rem;
          margin-bottom: 0.8rem;
          font-family: var(--presicav);
          }
        h1 {
          font-family: var(--farm-new);
          font-size: 7.2rem;
          -webkit-text-stroke: 4px var(--primary-dark);
          -webkit-text-fill-color: rgba(255,255,255,0);
          text-shadow: 4px 3px 0px var(--primary-light);
          line-height: 1;
          margin-bottom: 0.8rem;
        }

        .primary-dark {
          color: var(--primary-dark)
        }
        .primary-light {
          color: var(--primary-light)
        }
        img {
          max-width: 100%;
          border-radius: 6px;
        }
        div.container {
          width: 100vw;
        }
        main {
          max-width: 1366px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          margin: 0 6.4rem;
          grid-column-gap: 2.4rem;
          
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