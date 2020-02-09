import Link from 'next/link'

const IntroSection = () => {

    return (
        <section className="intro">
            <div className="intro-left-container">
                <p className="headline-body">Rogelio Hidalgo, Full Stack</p>
                <h1>Web Developer</h1>
                <p>with a creative edge</p>
                <p>focusing on front-end development with the ability to be flexible and adapt to various projects. My knowledge in full-stack development paired with my experience in graphic design allows me to build applications that are aesthetically pleasing and functional. I look forward to working with a team that values continual growth and development.</p>
                <a href="#">get in touch</a> <a href="#">view my portfolio</a>
            </div>
            <div className="intro-right-container">
                <div className="intro-images">
                    <img src="/img/rogelio-photo-bio.jpg" className="top-img" />
                    <img src="/img/cookie-doggie.jpg" className="mid-img" />
                    <img src="/img/odie-doggie.jpg" className="btm-img" />
                </div>
                <div className="intro-img-bkg"></div>
            </div>

            <style jsx>{`
        
            section.intro{
                    height: calc(100vh - 7.5rem);
                    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 6.4rem;
    grid-column-gap: 2.4rem;
                }
                div.intro-left-container {
    grid-column-start: 2;
    grid-column-end: 8;
    align-self: center;
                }

                div.intro-right-container {
                    grid-column-start: 8;
    grid-column-end: 12;
    position: relative;
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
               

                `}
            </style>
        </section>
    )
}

export default IntroSection