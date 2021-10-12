import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: '',
    },
    { name: 'Portfolio', description: '' },
    { name: 'Contact', description: '' },
    { name: 'Resume', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false)
  return (
    <>
      <Header />
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />

      {!contactSelected ? (
        <>
          <About></About>
          <Portfolio></Portfolio>
          {/* <Resume></Resume> */}
        </>
        ) : (
            <ContactForm></ContactForm>
            
      )}
      <Footer />
    </>
  )
}

export default App;
