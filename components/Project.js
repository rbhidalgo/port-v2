import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Project = ({
	index,
	image,
	name,
	description1,
	description2,
	tech,
	githubLink,
	siteLink,
	responsive,
}) => {
	// const backgroundImg = {
	//         width: "70%",
	//         height: "400px",
	//         backgroundImage: `url("${props.image}")`,

	// }
	const techItems = tech.map((tech, i) => (
		<li key={i} style={{ margin: '12px' }}>
			{tech}
		</li>
	))

	return (
		<li className='project-item' key={index}>
			<div className='project-item-left'>
				<p>{description1}</p>
				<p>{description2}</p>

				<a href={githubLink} target='_blank'>
					Github Link
				</a>
				<a href={siteLink} target='_blank'>
					Site Link
				</a>
			</div>
			<div className='project-item-right'>
				<h2>{name}</h2>
				<ul className='project-tech-tags'>{techItems}</ul>
				<img src={image} alt='`screenshot of project ${props.name}`' />
				{responsive ? <p>responsive</p> : <p>not responsive</p>}
			</div>
			{/* <div
				className='project-img'
				style={{ backgroundImage: `url("${image}")` }}></div> */}
		</li>
	)
}

export default Project
