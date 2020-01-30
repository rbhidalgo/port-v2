import Link from 'next/link'

const Project = ({image, name, description, tech, github, live, responsive}) => {
    // const backgroundImg = {
    //         width: "70%",
    //         height: "400px",
    //         backgroundImage: `url("${props.image}")`,

    // }
    return (
        <ul>
        <li><div className="project-img" style={{backgroundImage: `url("${image}")`}}></div>
        {/* <img src={props.image} alt="`screenshot of project ${props.name}`" /> */}
        <h1>
            {name}
            </h1>
    <p>{description}</p>
           
            </li>
            <style jsx>{`
                .project-img {
                    width: 50%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
                }
                `}
            </style>
    </ul>
    )
}

export default Project