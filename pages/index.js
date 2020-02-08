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
                div.intro-images {
                    position: absolute;
    background-color: lightgrey;
    width: 21rem;
    border-radius: 0.6rem;
    height: 31.6rem;
    top: 50%;
    right: 10%;
    transform: translate(-50%, -50%);
    z-index: 2;
                }
                div.intro-images .top-img {
                    position: absolute;
                    z-index: 3;
                }
                div.intro-images .mid-img {
                    position: absolute;
    z-index: 2;
    transform: rotate(-10deg);
                }
                div.intro-images .btm-img {
                    position: absolute;
    z-index: 1;
    transform: rotate(10deg);
                }
                div.intro-img-bkg {
                    width: 18.5rem;
    height: 45.0rem;
    background-color: lightslategray;
    top: 50%;
    right: 5%;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: .6rem;
    z-index: 1;
                }


            `}</style>
    </Layout>)


export default Index