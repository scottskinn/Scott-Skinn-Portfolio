import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import About from "./components/About";
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        
        <Footer />
      </div>
    </Router>
  );
};

// function Home() {
//   return <h2>Home</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
