import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Project from './components/Project'
import About from './components/About'
import Resume from './components/Resume'
import Navigation from './components/Navigation'

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
  const renderPage = () => {
    switch(currentCategory.name) {
      case 'About':
         return <About />
      case 'Contact':
        return <ContactForm />
      case 'Projects':
        return <Project />
      case 'Resume':
          return <Resume />
      default:
        return <About />
    }
  };
  return (
    <body>
        <header>
          <Header />
          <Navigation 
              categories={categories}
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
            ></Navigation>
          </header>
      <main>
        {renderPage(currentCategory.name)}
      </main>
      <Footer />
    </body>
  );
}


export default App;
