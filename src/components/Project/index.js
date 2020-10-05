import React from 'react';

function Project() {
  const projects = [
    {
      name: `MaskD: Post Pandemic Dating`,
      image: 'masked.PNG',
      technologies: 'JavaScript, HTML, CSS, WebAPIs',
      github: 'https://joshuaweisbrodtorres.github.io/post-pandemic-dating/'
    },
    {
      name: 'gitDevJob',
      image: 'gitdevjob.png',
      technologies: 'JavaScript, Node.js, Express, WebAPIs',
      github: 'https://github.com/jeoldmixon/TeamProject2',
    },
    {
      name: 'Weather Checker',
      image: 'weather-checker.PNG',
      technologies: 'HTML, CSS, JavaScript, MomentJS, OpenWeatherAPI',
      github: 'https://joshuaweisbrodtorres.github.io/what-is-your-weather/',
    },
    {
      name: 'Run Buddy',
      image: 'runbuddy.PNG',
      technologies: 'HTML, CSS',
      github: 'https://joshuaweisbrodtorres.github.io/run-buddy/',
    },
    {
      name: 'Horiseon',
      image: 'horiseon.PNG',
      technologies: 'HTML, CSS',
      github: 'https://joshuaweisbrodtorres.github.io/01-horiseon-project/',
    },
  ]

  return (
    <section className='flex-row container'>
      <ul>
        {projects.map((project) => (
          <li className="flex-row project-container">
            <img 
              src={require(`../../assets/projects/${project.image}`)}
              alt={project.name}
              className='project-img'
            />
            <div className='project-info'>
              <h3>{project.name}
                <span>
                  <a href={project.github}>
                    <img 
                      src={require(`../../assets/logos/github_logo.png`)} 
                      alt='GitHub logo'
                      className='github-logo'
                    />
                  </a>
                </span>
              </h3>
              <p>{project.technologies}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Project;