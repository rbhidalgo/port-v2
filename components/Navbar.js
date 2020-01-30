import Link from 'next/link'


const Navbar = () => (
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
        
<style jsx>{`
    nav {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        background: #333;
        color: #fff;
        position: sticky;
        top: 0;
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
    </nav>
)

export default Navbar;