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
		<section className='section-skills mb-120'>
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
				height='220'
				width='220'
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
				height='184'
				width='204'
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
		</section>
	)
}

export default Skills
