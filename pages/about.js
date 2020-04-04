import Layout from '../components/Layout'
import { motion } from "framer-motion";


const About = () => (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

    <Layout>
        <>
        <h1>About Me</h1>
        </>
    </Layout>
    </motion.div>
)


export default About