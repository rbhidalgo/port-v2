import Link from 'next/link'

const Project = props => {
    // const backgroundImg = {
    //         width: "70%",
    //         height: "400px",
    //         backgroundImage: `url("${props.image}")`,

    // }
    return (
        <ul>
        <li><div className="project-img" style={{backgroundImage: `url("${props.image}")`}}></div>
        {/* <img src={props.image} alt="`screenshot of project ${props.name}`" /> */}
        <h1>
            {props.name}
            </h1>

           
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