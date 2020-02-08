import Layout from '../components/Layout'
import Project from '../components/Project'
import IntroSection from '../components/IntroSection'
import projects from './projects.json'


const Index = () => (
    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
   <IntroSection />
    <section className="projects-container">
    {projects.map((project, index) => {
    return <Project key={index} {...project} />
        })}
    </section>
        <style jsx>{`               
            

            `}</style>
    </Layout>)


export default Index