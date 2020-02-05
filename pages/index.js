import Layout from '../components/Layout'
import Project from '../components/Project'
import projects from './projects.json'


const Index = () => (
    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
    <section className="intro">
    <h1>Hi!</h1>
    </section>
    <section className="projects-container">
    {projects.map((project, index) => {
    return <Project key={index} {...project} />
        })}
    </section>
        <style jsx>{`
                section.intro{
                    background-color: beige;
                    height: calc(100vh - 7.5rem);
                }

            `}</style>
    </Layout>)


export default Index