import Layout from '../components/Layout'
import { motion } from "framer-motion";


const Projects = () => (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

    <Layout>
        <>
        <h1>Projects</h1>
        </>
    </Layout>
    </motion.div>
)


export default Projects