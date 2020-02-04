import Link from 'next/link'


const Navbar = () => (
    <header>
        <nav>
        <ul className="nav-links">
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
        margin: 0 auto;
        min-height: 6vh;
        align-items: center;
        justify-content: space-evenly;
        
        color: #fff;
    }
    header {
        
        background: #333;
        position: sticky;
  top: 0;
    }

    ul.nav-links {
        flex: 1;
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
    .nav-right-socials {
        display: flex;
    flex: 1;
    justify-content: flex-end;
    }
    .nav-right-socials img {
        width: 1.8rem;
        margin-right:  1.2rem;
    }

    .nav-right-socials img:last-child {
        margin-right: 0;
    }

`}</style>
    </header>
)

export default Navbar;