import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Project from './components/Project'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  const [categories] = useState([
    {
      name: "About",
    },
    { 
      name: "Contact"
    },
    { 
      name: "Projects",
    },
    {
      name: "Resume",
    },
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  const [contactSelected, setContactSelected] = useState(false);
  const renderPage = () => {
    switch(currentCategory) {
      case 'About':
         return <About />
      case 'Contact':
        return <ContactForm />
      case 'Project':
        return <Project />
      case 'Resume':
          return <Resume />
      default:
        return <About />
    }
  };
  return (
    <body>
        <Header />
      <main>
        {renderPage(currentCategory)}
      </main>
      <Footer />
    </body>
  );
}


export default App;
