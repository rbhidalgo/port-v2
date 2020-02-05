import Layout from '../components/Layout'
import Project from '../components/Project'
import projects from './projects.json'


const Index = () => (
    <Layout title="Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA">
    <section className="intro">
        <div className="intro-left-container">
    <p>Rogelio Hidalgo, Full Stack</p>
    <h1>Web Developer</h1>
    <p>with a creative edge</p>
    <p>focusing on front-end development with the ability to be flexible and adapt to various projects. My knowledge in full-stack development paired with my experience in graphic design allows me to build applications that are aesthetically pleasing and functional. I look forward to working with a team that values continual growth and development.</p>
    <a href="#">get in touch</a> <a href="#">view my portfolio</a>
    </div>
    <div className="intro-right-container">
        <div className="intro-images">
            <img src="/img/beer-o-slots-browser2.png"/>
        </div>
        <div className="intro-image-bkg"></div>
    </div>
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
                    display: flex;
                    flex-direction: row;
                }
                div.intro-left-container {
                    flex: 1;
                }

                div.intro-right-container {
                    flex: 1;
                }


            `}</style>
    </Layout>)


export default Index