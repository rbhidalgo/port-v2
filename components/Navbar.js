import Link from 'next/link'


const Navbar = () => (
    <nav>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
        </ul>
<style jsx>{`
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
`}</style>
    </nav>
)

export default Navbar;