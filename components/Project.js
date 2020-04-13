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
		<li key={i} className='project-tech-tags-item'>
			{tech}
		</li>
	))

	return (
		<li className='project-item mb-64' key={index}>
			<h5>{name}</h5>
			<ul className='project-tech-tags'>{techItems}</ul>
			<img src={image} alt='`screenshot of project ${props.name}`' />

			<p>{description1}</p>
			<p>{description2}</p>

			<a href={githubLink} target='_blank'>
				Github Link
			</a>
			<a href={siteLink} target='_blank'>
				Site Link
			</a>
			{responsive ? <p>responsive</p> : <p>not responsive</p>}
			{/* <div
				className='project-img'
				style={{ backgroundImage: `url("${image}")` }}></div> */}
		</li>
	)
}

export default Project
