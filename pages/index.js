import { motion, useViewportScroll, useTransform } from 'framer-motion'

import Layout from '../components/Layout'
import Project from '../components/Project'
import Skills from '../components/Skills'
import IntroSection from '../components/IntroSection'
import projects from './projects.json'

import Arrow from '../public/img/intro-section-downarrow.svg'

const Index = () => {
	const icon = {
		hidden: {
			pathLength: 0,
			rotateZ: 0,
			fill: 'rgba(255, 255, 255, 0)',
		},
		visible: {
			pathLength: 1,
			rotateZ: 360,
			fill: 'rgba(255, 255, 255, 1)',
		},
	}

	const { scrollYProgress } = useViewportScroll()
	const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0])

	return (
		<motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
			<Layout title='Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA'>
				<IntroSection scale={scale} />
				<Skills />
				<section className='projects-container wrapper'>
					<div className='section-title grid'>
						<h1 className='tt-uc'>Portfolio</h1>
						<Arrow />

						<motion.svg
							style={{ scale }}
							width={17.953}
							height={24.562}
							viewBox='0 0 17.953 24.562'>
							<motion.path
								d='M1 1h8.171v22.162L1 12.733h15.953L9.171 23.162'
								stroke='#36eb80'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								variants={icon}
								initial='hidden'
								animate='visible'
							/>
						</motion.svg>

						<svg width={81} height={81} viewBox='0 0 81 81'>
							<g
								fill='none'
								stroke='#a4ebc2'
								strokeWidth={2}
								strokeDasharray={25}>
								<circle cx={40.5} cy={40.5} r={40.5} stroke='none' />
								<circle cx={40.5} cy={40.5} r={39.5} />
							</g>
						</svg>
					</div>
					<ul className='grid'>
						{projects.map((project, index) => {
							return <Project key={index} {...project} />
						})}
					</ul>
				</section>
			</Layout>
		</motion.div>
	)
}

export default Index
