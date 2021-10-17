import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Navbar from 'react-bootstrap/Navbar'
import MyNav from "./components/MyNav";


export default function App() {
  return (
    <Router>
      <div>
        <MyNav />

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import About from './components/About';
// import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
// import ContactForm from './components/Contact';
// import Resume from './components/Resume';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {

// const [categories] = useState([
//   {
//     name: 'About Me',
//     description: '',
//   },
//   { name: 'Portfolio', description: '' },
//   { name: 'Contact', description: '' },
//   { name: 'Resume', description: '' },
// ]);

// const [currentCategory, setCurrentCategory] = useState(categories[0]);
// const [contactSelected, setContactSelected] = useState(false)
// return (
//   <>
//     <Header />
//     <Nav
//       categories={categories}
//       setCurrentCategory={setCurrentCategory}
//       currentCategory={currentCategory}
//       contactSelected={contactSelected}
//       setContactSelected={setContactSelected}
//     />

//     {!contactSelected ? (
//       <>
//         <About></About>
//         <Portfolio></Portfolio>
//         <Resume></Resume>
//       </>
//       ) : (
//           <ContactForm></ContactForm>

//     )}
//     <Footer />
//   </>
// )
// }

// export default App;
