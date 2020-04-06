
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
         <img src="/img/skills-polygon.svg" className="skills-polygon-right" height="134" width="154" />

         <div className="wrapper grid">
         <div className="skills-text-heading">
           <div className="inner-text rotate-text">
            <h1>Skills</h1>
            <span className="right-arrow"><img src="/img/intro-section-downarrow.svg" alt="right arrow" height="22" width="24"/></span>
            </div>
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