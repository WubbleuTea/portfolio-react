import React from 'react';
// import logo from '../../assets/logos/github_logo.png'

const Footer = () => {
  const links = [
    {
      type: 'GitHub',
      src: 'https://github.com/joshuaweisbrodtorres',
      logo: 'github_logo.png',

    },
    {
      type: 'LinkedIn',
      src: 'https://www.linkedin.com/in/joshua-weisbrod-torres/',
      logo: 'linkedin_logo.png'
    }
  ];
  return (
    <footer>
        {links.map((link) => (
            <a
              href={link.src}
              target="_blank"
              rel="noopener noreferrer"
              key={links.type}
            > 
              <img src=
                {require(`../../assets/logos/${link.logo}`)}
                alt={link.type}
                className="logo"
               />
            </a>
        ))}
    </footer>
  )
}

export default Footer;