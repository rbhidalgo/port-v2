import Link from 'next/link'

const IntroSection = () => {

    return (
        <section className="intro grid">
            <div className="intro-left-container">
                <p className="headline-body">Rogelio Hidalgo, Full Stack</p>
                <h1>Web Developer</h1>
                <p>with a creative edge</p>
                <p>focusing on front-end development with the ability to be flexible and adapt to various projects. My knowledge in full-stack development paired with my experience in graphic design allows me to build applications that are aesthetically pleasing and functional. I look forward to working with a team that values continual growth and development.</p>
                <a href="#">get in touch</a> <a href="#">view my portfolio</a>
            </div>
                <img src="/img/rogelio-photo-bio.jpg" className="top-img" />
                <img src="/img/cookie-doggie.jpg" className="mid-img" />
                <img src="/img/odie-doggie.jpg" className="btm-img" />
                <div className="intro-img-bkg"></div>
            
            <style jsx>{`
        
            section.intro{
                    height: calc(100vh - 7.5rem);
                }
                div.intro-left-container {
                    grid-column: 2/8;
                    align-self: center;
                }
                
                .intro img {
                    grid-column: 9/11;
                    grid-row: 1/2;
                    align-self: center;
                    max-height: 31.5rem;
                }
                .top-img {
                    z-index: 3;
                }
                .mid-img {  
                    z-index: 2;
                    transform: rotate(-10deg);
                }
                 .btm-img {
                    z-index: 1;
                    transform: rotate(10deg);
                }

                .intro-img-bkg {
                    height: 45.0rem;
                    background-color:lightslategray;
                    border-radius: .6rem;
                    z-index: 0;
                    align-self: center;
                    grid-column: 10/12;
                    grid-row: 1/2;
                    margin-left: -2.4rem;
                }

                `}
            </style>
        </section>
    )
}

export default IntroSection