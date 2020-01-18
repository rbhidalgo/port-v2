import Navbar from './Navbar'

const Layout = (props) => (
    <main>
        <Navbar />
        {props.children}
    </main>
)

export default Layout