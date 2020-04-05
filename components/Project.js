import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

const Project = ({ index, image, name, description1, description2, tech, githubLink, siteLink, responsive }) => {
    // const backgroundImg = {
    //         width: "70%",
    //         height: "400px",
    //         backgroundImage: `url("${props.image}")`,

    // }
    const techItems = tech.map((tech, i) =>
        <li key={i} style={{margin:"12px"}}>{tech}</li>)

    return (
        <ul>
            <li className="project-item" key={index}>
                <div className="project-img" style={{ backgroundImage: `url("${image}")` }}></div>
                {/* <img src={props.image} alt="`screenshot of project ${props.name}`" /> */}
                <div className="project-content">
                    <h1>
                        {name}
                    </h1>
                    <p>{description1}</p>
                    <p>{description2}</p>
                    <ul className="project-tech-tags">
                        {techItems}
                    </ul>
                    <a href={githubLink} target="_blank">Github Link</a>
                    <a href={siteLink} target="_blank">Site Link</a>

                    {responsive ? <p>responsive</p> : <p>not responsive</p>}
                </div>
            </li>
        </ul>
    )
}

export default Project