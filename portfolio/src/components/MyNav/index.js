import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';

function MyNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Scott Skinn</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contactForm">Contact</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ContactForm">
          <ContactForm />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
      </Switch>
    </>

    //   <header className="flex-row px-1">
    //   <nav>
    //     <ul className="flex-row">
    //       <li className="mx-2">
    //         <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
    //           About me
    //         </a>
    //       </li>

    //       <li className="mx-2">
    //         <a href="#portfolio" onClick={() => setContactSelected(false)}>
    //           Portfolio
    //         </a>
    //       </li>

    //       <li className="mx-2">
    //         <a href="#resume" onClick={() => setContactSelected(false)}>
    //           Resume
    //         </a>
    //       </li>

    //       <li className={`mx-2 ${contactSelected && 'navActive'}`}>
    //         <span onClick={() => setContactSelected(true)}>Contact</span>
    //       </li>
    //       {categories.map((category) => (
    //         <li
    //           className={`mx-1 ${
    //             currentCategory.name === category.name && !contactSelected && 'navActive'
    //             }`}
    //           key={category.name}
    //         >
    //           <span
    //             onClick={() => {
    //               setCurrentCategory(category);
    //               setContactSelected(false);
    //             }}
    //           >
    //             {capitalizeFirstLetter(category.name)}
    //           </span>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default MyNav;
