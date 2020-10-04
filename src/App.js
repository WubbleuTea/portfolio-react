import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <body>
        <Navigation />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </body>
  );
}


export default App;
