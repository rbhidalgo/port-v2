import Link from 'next/link'


const Navbar = () => (
    <header>
        <nav>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <li><Link href="/projects"><a>Projects</a></Link></li>
        </ul>
        <div className="nav-right-socials">
        <img src="/img/github.svg"/>
        <img src="/img/linkedin.svg"/>
        <img src="/img/docicon.svg"/>
        </div>
        </nav>
<style jsx>{`
    nav {
        display: flex;
        width: 90%;
        margin: auto;
        min-height: 6vh;
        align-items: center;
        justify-content: space-evenly;
        
        color: #fff;
        position: sticky;
        top: 0;
    }
    header {
        background: #333;
    }

    ul {
       
        list-style: none;
        display: flex;
        margin: 0;
    }
    ul li {
        font-size: 1.8rem;
        margin-right: 20px;
    }

    ul li a {
        color: #fff;
        text-decoration: none;
    }
    nav img{
        width: 1.8rem;
    }
`}</style>
    </header>
)

export default Navbar;