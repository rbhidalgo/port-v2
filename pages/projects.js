import Layout from '../components/Layout'
import Project from '../components/Project'

import { motion } from "framer-motion";
import projects from './projects.json'


const Projects = () => (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

    <Layout>
    <section className="projects-container">
    <div className="wrapper">

    <h1>Portfolio</h1>

    {projects.map((project, index) => {
    return <Project key={index} {...project} />
        })}
        </div>
    </section>
    </Layout>
    </motion.div>
)


export default Projects