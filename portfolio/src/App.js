import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App;
