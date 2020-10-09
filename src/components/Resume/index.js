import React from 'react';

function Resume() {
  const frontEnd = [
    {
      name: 'JavaScript'
    },
    {
      name: 'React'
    },
    {
      name: 'HTML'
    },
    {
      name: 'CSS'
    },
    {
      name: 'JQuery'
    },
    {
      name: 'Materialize'
    },
    {
      name: 'Bootstrap'
    },
  ]
  const backEnd = [
    {
      name: 'APIs'
    },
    {
      name: 'NodeJS'
    },
    {
      name: 'Express'
    },
    {
      name: 'MySQL, Sequelize'
    },
    {
      name: 'MongoDB, Mongoose'
    },
    {
      name: 'Rest'
    },
  ]
  return(
    <section>
      <div className='resume-title'>
        <h3>Resume</h3>
          <a 
            src='https://docs.google.com/document/d/1qH9AjY6xJ0bBZw3CkbmI_z98qNTq1jpBASrymPaRbng/edit?usp=sharing'
            className='resume-doc'
          >
            Download my resume.
          </a>
      </div>
      <h3>Front End Proficiencies:</h3>
      <ul>
        {frontEnd.map((tech) => (
          <li 
            key={tech.name}
          >
            {tech.name}
          </li>
        ))}
      </ul>

      <h3>Back End Proficiencies:</h3>
      <ul>
        {backEnd.map((tech) => (
          <li 
            key={tech.name}
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Resume;