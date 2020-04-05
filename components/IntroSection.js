import React, { Component } from 'react'
import { motion } from "framer-motion"

// import Link from 'next/link'

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
                    <motion.p className="headline-body primary-light"  animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
        initial={{ opacity: 0 }}>Rogelio Hidalgo, Full Stack</motion.p>
                    <h1>Web Developer</h1>
                    <p className="headline-body primary-dark">with a creative edge and a eye for UI/UX</p>
                    <p className="max-width primary-light">focusing on front-end development with the ability to be flexible and adapt to various projects. My knowledge in full-stack development paired with my experience in graphic design allows me to build applications that are aesthetically pleasing and functional. I look forward to working with a team that values continual growth and development.</p>
                    <a href="#" className="primary-btn mt-48">get in touch</a> <a href="#" className="primary-btn mt-48">view my portfolio</a>
                    <span className="down-arrow"><img src="/img/intro-section-downarrow.svg" alt="down arrow" height="20" width="22"/></span>
                </div>
                <motion.img src="/img/rogelio-photo-bio.jpg" className="top-img" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} 
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ opacity: 0, x: 85, zIndex: 1, delay: 0 }}
                transition={{ delay: 0.2 }}/
                >
                 <img src="/img/intro-section-rect1.svg" className="rectangle spinning" height="64" width="64" />

                 <img src="/img/intro-section-poly02.svg" className="intro-top-poly spinning" height="62" width="72" />

                 <img src="/img/intro-section-poly01.svg" className="intro-btm-poly spinning" height="62" width="72" />

                <img src="/img/cookie-doggie.jpg" className="mid-img"

                    style={{ transform: `rotate(${this.state.rotate}) translate(${this.state.x}, ${this.state.y})` }} />

                <img src="/img/odie-doggie.jpg" className="btm-img"

                    style={{ transform: `rotate(${this.state.rotate2}) translate(${this.state.x2}, ${this.state.y2})` }} />


                <div className="intro-bkg-container">
                    <div className="intro-img-bkg"></div>
                    <img src="/img/intro-section-ellipse01.svg" className="circle spinning" height="81" width="81" />
                   
                    <img src="/img/intro-section-ellipse01.svg" className="big-circle spinning" height="111" width="111" />
                </div>
            </section>
        )
    }
}


export default IntroSection