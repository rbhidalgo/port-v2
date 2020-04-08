import { motion } from "framer-motion"

import Layout from '../components/Layout'
import Project from '../components/Project'
import Skills from '../components/Skills'
import IntroSection from '../components/IntroSection'
import projects from './projects.json'

import Arrow from '../public/img/intro-section-downarrow.svg'


const Index = () => (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
   <IntroSection />
   <Skills />
    <section className="projects-container wrapper">
    <div className="section-title grid">
    <h1 className="tt-uc">Portfolio</h1>
    <Arrow />
    </div>
        <ul className="grid">
    {projects.map((project, index) => {
    return <Project key={index} {...project} />
        })}
        </ul>
    </section>
    </Layout>
    </motion.div>
    
    )


export default Index