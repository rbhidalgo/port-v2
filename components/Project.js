import Link from 'next/link'

const Project = ({ image, name, description1, description2, tech, githubLink, siteLink, responsive }) => {
    // const backgroundImg = {
    //         width: "70%",
    //         height: "400px",
    //         backgroundImage: `url("${props.image}")`,

    // }
    const techItems = tech.map((tech) =>
        <li>{tech}</li>)

    return (
        <ul>
            <li className="project-item">
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
            <style jsx>{`
                .project-img {
                    flex: 1;
                    width: 50%;
                    height: 400px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                li.project-item {
                    display: flex;
                }
                .project-tech-tags {
                    display: flex;
                }
                .project-content {
                    flex: 1;
                }
                `}
            </style>
        </ul>
    )
}

export default Project