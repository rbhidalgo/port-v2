import Link from 'next/link'

import React, { Component } from 'react'

class IntroSection extends Component {

    state = {
        x: '',
        y: '',
        x2: '',
        y2: '',
        rotate: '',
        rotate2: ''
    }

    onMouseOver = () => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50
        const x2 = 25 * (Math.floor(Math.random() * 5)) - 50
        const y2 = 25 * (Math.floor(Math.random() * 5)) - 50
        this.setState({
            x: `${x}px`,
            y: `${y}px`,
            x2: `${x2}px`,
            y2: `${y2}px`,
            rotate: '0deg'
        })
        console.log(`x=${this.state.x} y=${this.state.y}`)
    }

    onMouseOut = () => {
        this.setState({
            x: `0px`,
            y: `0px`,
            x2: '0px',
            y2: '0px',
            rotate: '-10deg',
            rotate2: '10deg'
        })
        console.log(this.state.x)
    }

    render() {
        return (
            <section className="intro grid">
            <div className="intro-left-container">
                <p className="headline-body primary-light">Rogelio Hidalgo, Full Stack</p>
                <h1>Web Developer</h1>
                <p className="headline-body primary-dark">with a creative edge</p>
                <p className="max-width primary-light">focusing on front-end development with the ability to be flexible and adapt to various projects. My knowledge in full-stack development paired with my experience in graphic design allows me to build applications that are aesthetically pleasing and functional. I look forward to working with a team that values continual growth and development.</p>
                <a href="#">get in touch</a> <a href="#">view my portfolio</a>
            </div>
                <img src="/img/rogelio-photo-bio.jpg" className="top-img" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} />
               
                <img src="/img/cookie-doggie.jpg" className="mid-img"  
                
                style={{transform: `rotate(${this.state.rotate}) translate(${this.state.x}, ${this.state.y})`}} />
               
                <img src="/img/odie-doggie.jpg" className="btm-img"
                
                style={{transform: `rotate(${this.state.rotate2}) translate(${this.state.x2}, ${this.state.y2})`}} />
                
                
                <div className="intro-img-bkg"><img src="/img/intro-section-ellipse01.svg" className="circle spinning" /></div>
            
            <style jsx>{`
            section.intro{
                    height: calc(100vh - 7.5rem);
                }
                div.intro-left-container {
                    grid-column: 2/8;
                    align-self: center;
                }
                img.circle {
                    z-index: 4;
                    position: absolute;
    left: -47px;
    animation: spin 50s linear infinite;
                }
                @keyframes spin { 
    100% { 
      transform: rotateZ(360deg); 
    }
  }
                
                .intro img {
                    grid-column: 9/11;
                    grid-row: 1/2;
                    align-self: center;
                    max-height: 31.5rem;
                }
                .top-img {
                    z-index: 3;
                    transition: all 0.5s ease-in-out;
                }
                .top-img:hover{
                    opacity: 0;
                }
                .mid-img {  
                    z-index: 2;
                    transform: rotate(-10deg);
                    transition: transform 0.5s ease-in-out;
                }
                 .btm-img {
                    z-index: 1;
                    transform: rotate(10deg);
                    transition: transform 0.5s ease-in-out;
                }
                
                .intro-img-bkg {
                    height: 45.0rem;
                    background-color:var(--highlight);
                    border-radius: .6rem;
                    z-index: 0;
                    align-self: center;
                    grid-column: 10/12;
                    grid-row: 1/2;
                    margin-left: -2.4rem;
                    position: relative;
                }

                `}
            </style>
        </section>
        )
    }
}


export default IntroSection