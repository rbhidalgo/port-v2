import Link from 'next/link'

const Project = props => {
    return (
        <>
        <img src={props.image} alt="`screenshot of project ${props.name}`" />
        <h1>
            {props.name}
            </h1>
    </>
    )
}

export default Project