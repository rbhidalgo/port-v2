import Layout from '../components/Layout'
import Project from '../components/Project'
import projects from './projects.json'


const Index = () => (
    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
    <section className="intro">
    <h1>Hi!</h1>
    </section>
    <section className="projects-section">
    {projects.map((project, index) => {
    return <Project key={index} {...project} />
        })}
    </section>
    </Layout>)


export default Index