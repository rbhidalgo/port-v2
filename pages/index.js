import { motion } from "framer-motion"

import Layout from '../components/Layout'
import Project from '../components/Project'
import Skills from '../components/Skills'
import IntroSection from '../components/IntroSection'
import projects from './projects.json'


const Index = () => (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
   <IntroSection />
   <Skills />
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


export default Index