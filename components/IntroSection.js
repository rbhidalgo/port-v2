import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import GeoShape from './svg/GeoShape'
import GeoShape2 from './svg/GeoShape2'

// import Link from 'next/link'

class IntroSection extends Component {
	state = {
		x: '',
		y: '',
		x2: '',
		y2: '',
		rotate: '',
		rotate2: '',
	}

	onMouseOver = () => {
		const x = 25 * Math.floor(Math.random() * 5) - 50
		const y = 25 * Math.floor(Math.random() * 5) - 50
		const x2 = 25 * Math.floor(Math.random() * 5) - 50
		const y2 = 25 * Math.floor(Math.random() * 5) - 50
		this.setState({
			x: `${x}px`,
			y: `${y}px`,
			x2: `${x2}px`,
			y2: `${y2}px`,
			rotate: '0deg',
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
			rotate2: '10deg',
		})
		console.log(this.state.x)
	}

	render() {
		const { scale } = this.props
		return (
			<motion.section
				className='intro grid wrapper'
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
				initial={{ opacity: 0, x: -200 }}>
				<div className='intro-left-container'>
					<p className='headline-body primary-light'>
						Rogelio Hidalgo, Full Stack
					</p>
					<h1>Web Developer</h1>
					<p className='headline-body primary-dark'>with a eye for UI/UX</p>
					{/* <p className='headline-body primary-dark'>
						with a creative edge and a eye for UI/UX
					</p> */}
					<p className='max-width primary-light'>
						focusing on front-end development with the ability to be flexible
						and adapt to various projects. My knowledge in full-stack
						development paired with my experience in graphic design allows me to
						build applications that are aesthetically pleasing and functional. I
						look forward to working with a team that values continual growth and
						development.
					</p>

					<motion.a
						whileTap={{ scale: 0.8 }}
						href='#'
						className='primary-btn l-mt-48 l-mr-24 mt-24'>
						get in touch
					</motion.a>
					<Link to='port' smooth={true} offset={-70} duration={500} href='#'>
						<motion.a
							whileTap={{ scale: 0.8 }}
							href='#'
							className='primary-btn l-mt-48 mt-24'>
							view my portfolio
						</motion.a>
					</Link>
					<span className='down-arrow'>
						<img
							src='/img/intro-section-downarrow.svg'
							alt='down arrow'
							height='20'
							width='22'
						/>
					</span>
				</div>
				<div className='intro-right-container'>
					{/* <motion.img
						src='/img/rogelio-photo-bio.jpg'
						className='top-img'
						onMouseOver={this.onMouseOver}
						onMouseOut={this.onMouseOut}
						initial={{ x: 60, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						whileHover={{ opacity: 0, x: 85, zIndex: 1, delay: 0 }}
						transition={{ delay: 0.1 }}
					/> */}
					<img src='/img/intro-rog.svg' className='top-img' />
					{/* <GeoShape className='rectangle' height='64px' width='64px' />

					<GeoShape2 className='rectangle' height='96px' width='96px' /> */}

					{/* <motion.img
						src='/img/intro-section-poly02.svg'
						className='intro-top-poly'
						style={{ scale }}
						height='62'
						width='72'
					/>

					<motion.img
						src='/img/intro-section-poly01.svg'
						className='intro-btm-poly'
						style={{ scale }}
						height='62'
						width='72'
					/> */}

					{/* <img
						src='/img/cookie-doggie.jpg'
						className='mid-img'
						style={{
							transform: `rotate(${this.state.rotate}) translate(${this.state.x}, ${this.state.y})`,
						}}
					/>

					<img
						src='/img/odie-doggie.jpg'
						className='btm-img'
						style={{
							transform: `rotate(${this.state.rotate2}) translate(${this.state.x2}, ${this.state.y2})`,
						}}
					/> */}

					<div className='intro-bkg-container'>
						<img
							src='/img/intro-poly.svg'
							className='intro-poly'
							height='100'
						/>
						{/* <img
							src='/img/intro-section-up-arrow.svg'
							className='intro-up-arrow'
							height='36'
							width='48'
						/>
						<img
							src='/img/intro-section-up-arrow.svg'
							className='intro-up-arrow'
							height='36'
							width='48'
						/>
						<img
							src='/img/intro-section-up-arrow.svg'
							className='intro-up-arrow'
							height='36'
							width='48'
						/> */}
						<div className='intro-img-bkg'></div>
						<img
							src='/img/intro-circle.svg'
							className='intro-circle'
							height='94'
							width='94'
						/>

						<img
							src='/img/intro-hash.svg'
							className='intro-hash'
							height='60'
							width='60'
						/>

						<img
							src='/img/intro-brackets.svg'
							className='intro-brackets'
							height='60'
							width='60'
						/>

						<img
							src='/img/intro-laptop.svg'
							className='intro-laptop'
							height='300'
						/>
						{/* <img
							src='/img/intro-section-ellipse01.svg'
							className='big-circle spinning'
							height='111'
							width='111'
						/> */}
					</div>
				</div>
			</motion.section>
		)
	}
}

export default IntroSection
