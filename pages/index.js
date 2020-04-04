import { motion } from "framer-motion"

import Layout from '../components/Layout'
import Project from '../components/Project'
import IntroSection from '../components/IntroSection'
import projects from './projects.json'


const Index = () => (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
   <IntroSection />
    <section className="projects-container">
    {projects.map((project, index) => {
    return <Project key={index} {...project} />
        })}
    </section>
    </Layout>
    </motion.div>
    
    )


export default Index