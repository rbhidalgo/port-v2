import { motion, useViewportScroll, useTransform } from 'framer-motion'

import Layout from '../components/Layout'
import Project from '../components/Project'
import Skills from '../components/Skills'
import IntroSection from '../components/IntroSection'
import projects from './projects.json'

import Arrow from '../public/img/intro-section-downarrow.svg'

const Index = () => {
	const { scrollYProgress } = useViewportScroll()
	const scale = useTransform(scrollYProgress, [0.5, 1], [0.85, 1.1])

	return (
		<motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
			<Layout title='Full Stack Web Developer | Rogelio Hidalgo | Los Angeles, CA'>
				<IntroSection scale={scale} />
				<Skills scale={scale} />

				<section className='projects wrapper mb-120' name='port'>
					<div className='section-title grid'>
						<h1 className='tt-uc'>Portfolio</h1>
						<span className='down-arrow-center'>
							<Arrow />
						</span>
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
