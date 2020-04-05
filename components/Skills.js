
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
      "WooCommerce",
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
       <section className="section-skills grid">
         <div className="wrapper">
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