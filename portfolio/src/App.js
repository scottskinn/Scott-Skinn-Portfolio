import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import About from "./components/About";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    </Router>
  );
};
