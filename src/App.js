import React from 'react';
import './App.css';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Project from './components/Project'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  return (
    <body>
        <Header />
      <main>
        <About />
        <ContactForm />
        <Project />
        <Resume />
      </main>
      <Footer />
    </body>
  );
}


export default App;
