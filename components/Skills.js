
const Skills = () => {

    const skills = [
      "HTML5",
      "CSS3",
      "Javascript",
      "Vanilla JS", 
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Mongoose",
      "Restful Routing",
      "AJAX",
      "JSON",
      "GIT",
      "Github",
      "Bootstrap",
      "tachyons",
      "Wordpress",
      "Adobe Creative Cloud Suite",
      "Adobe XD",
      "Dreamweaver",
      "Photoshop",
      "Illustrator",
      "Indesign"
      ]

      const skillItem = skills.map((skill, i ) => 
        <li key={i}>
            {skill}
        </li>
      )

    return (
       <section className="section-skills">
         <img src="/img/skills-circle-left.svg" className="skills-circle-left spinning" height="120" width="120" />
         <img src="/img/skills-circle-right.svg" className="skills-circle-right spinning" height="350" width="350" />
         <div className="wrapper grid">
         <div className="skills-text-heading">
            <h1>Skills</h1>
         </div>

        <div className="skills-text-list">
          <ul>
            {skillItem}
          </ul>
        </div>
        </div>
       </section>
    )
}

export default Skills