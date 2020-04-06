
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
      "Adobe Creative - Cloud Suite",
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
       <section className="section-skills mb-120">
         <img src="/img/skills-rectangle.svg" className="skills-rect-left" height="144" width="144" />
         <img src="/img/skills-circle-left.svg" className="skills-circle-left spinning" height="110" width="110" />
         <img src="/img/skills-polygon.svg" className="skills-polygon-right" height="134" width="154" />
         <img src="/img/skills-circle-right.svg" className="skills-circle-right spinning" height="325" width="325" />
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