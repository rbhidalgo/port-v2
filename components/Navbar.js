import Link from 'next/link'


const Navbar = () => (
    <nav>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <li><Link href="/projects"><a>Projects</a></Link></li>
        </ul>
        <img src="/img/github.svg"/>
        <img src="/img/linkedin.svg"/>
        <img src="/img/docicon.svg"/>
        
<style jsx>{`
    nav {
        display: flex;
        width: 100%;
    }
    ul {
        background: #333;
        color: #fff;
        list-style: none;
        display: flex;
        margin: 0;
    }
    ul li {
        font-size: 18;
        margin-right: 20px;
    }

    ul li a {
        color: #fff;
        text-decoration: none;
    }
    nav img{
        width: 60px;
    }
`}</style>
    </nav>
)

export default Navbar;