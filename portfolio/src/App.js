import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
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
