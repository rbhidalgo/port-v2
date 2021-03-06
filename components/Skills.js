import { motion } from 'framer-motion'

const Skills = ({ scale }) => {
	const skills = [
		'HTML5',
		'CSS3',
		'Javascript',
		'Vanilla JS',
		'MongoDB',
		'Express',
		'React',
		'Node.js',
		'Next.js',
		'Mongoose',
		'Restful Routing',
		'AJAX',
		'JSON',
		'GIT',
		'Github',
		'Bootstrap',
		'tachyons',
		'Wordpress',
		'Adobe Creative - Cloud Suite',
		'Adobe XD',
		'Dreamweaver',
		'Photoshop',
		'Illustrator',
		'Indesign',
	]

	const skillItem = skills.map((skill, i) => <li key={i}>{skill}</li>)

	return (
		<motion.section
			className='section-skills'
			animate={{ opacity: 1, x: 0 }}
			transition={{ ease: 'easeInOut' }}
			initial={{ opacity: 0, x: 200 }}>
			<motion.img
				src='/img/skills-rectangle.svg'
				className='skills-rect-left'
				style={{ scale }}
				initial={{ rotateY: 0 }}
				animate={{ rotateY: 360 }}
				transition={{
					ease: 'easeInOut',
					duration: 2,
					flip: Infinity,
					repeatDelay: 2.2,
				}}
				height='165'
				width='165'
			/>
			<img
				src='/img/skills-circle-left.svg'
				className='skills-circle-left spinning'
				height='115'
				width='115'
			/>

			<motion.img
				src='/img/skills-polygon.svg'
				className='skills-polygon-right'
				style={{ scale }}
				initial={{ rotateY: 0 }}
				animate={{ rotateY: 360 }}
				transition={{
					ease: 'easeInOut',
					duration: 2,
					flip: Infinity,
					repeatDelay: 2.5,
				}}
				height='170'
				width='190'
			/>
			<img
				src='/img/skills-circle-right.svg'
				className='skills-circle-right spinning'
				height='325'
				width='325'
			/>
			<div className='wrapper grid'>
				<div className='skills-text-heading'>
					<div className='inner-text rotate-text'>
						<h1 className='tt-uc'>Skills</h1>
						<span className='right-arrow'>
							<img
								src='/img/intro-section-downarrow.svg'
								alt='right arrow'
								height='22'
								width='24'
							/>
						</span>
					</div>
				</div>

				<div className='skills-text-list'>
					<ul>{skillItem}</ul>
				</div>
			</div>
		</motion.section>
	)
}

export default Skills
