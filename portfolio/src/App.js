import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [contactSelected, setContactSelected] = useState(false)
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App;
