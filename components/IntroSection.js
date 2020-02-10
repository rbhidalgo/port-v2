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
            
              
                    <img src="/img/rogelio-photo-bio.jpg" className="top-img" />
                    <img src="/img/cookie-doggie.jpg" className="mid-img" />
                    <img src="/img/odie-doggie.jpg" className="btm-img" />
                
                <div className="intro-img-bkg"></div>
            

            <style jsx>{`
        
            section.intro{
                    height: calc(100vh - 7.5rem);
                    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 6.4rem;
    grid-column-gap: 2.4rem;
                }
                div.intro-left-container {
    grid-column: 2/8;
    
    align-self: center;
                }

                div.intro-right-container {
                    grid-column-start: 8;
    grid-column-end: 12;
    position: relative;
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
                div.intro-img-bkg {
                    width: 18.5rem;
    height: 45.0rem;
    background-color: lightslategray;



    border-radius: .6rem;
    z-index: 1;
                }
               

                `}
            </style>
        </section>
    )
}

export default IntroSection