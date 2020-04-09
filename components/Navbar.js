import Link from 'next/link'

const Navbar = () => (
	<header>
		<nav>
			<ul className='nav-links'>
				<li>Download My Resume</li>
				{/* <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <li><Link href="/projects"><a>Projects</a></Link></li> */}
			</ul>
			<div className='nav-right-socials'>
				<img src='/socials/bxs-file-pdf.svg' />
				<img src='/socials/bxl-github.svg' />
				<img src='/socials/bxl-linkedin-square.svg' />
				<img src='/socials/bxl-dribbble.svg' />
			</div>
		</nav>
		<style jsx>{`
			nav {
				display: flex;
				max-width: 1366px;
				margin: 0 auto;
				min-height: 7.5rem;
				align-items: center;
				justify-content: space-evenly;
				text-transform: uppercase;
				color: #333;
			}
			header {
				background: #fff;
				position: sticky;
				top: 0;
				z-index: 10;
			}

			ul.nav-links {
				flex: 1;
				list-style: none;
				display: flex;
				margin-left: 6.4rem;
			}
			ul li {
				font-size: 1.8rem;
				margin-right: 2.4rem;
				font-family: presicav, sans-serif;
				font-weight: 900;
				font-style: normal;
			}

			ul li a {
				color: #333;
				text-decoration: none;
			}
			.nav-right-socials {
				display: flex;
				flex: 1;
				justify-content: flex-end;
				margin-right: 6.4rem;
			}
			.nav-right-socials img {
				width: 2.4rem;
				margin-right: 1.8rem;
			}

			.nav-right-socials img:last-child {
				margin-right: 0;
			}
		`}</style>
	</header>
)

export default Navbar
