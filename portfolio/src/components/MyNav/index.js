import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../../App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "../About";
import Portfolio from "../Portfolio";
import ContactForm from "../Contact";
import Resume from "../Resume";

function MyNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#about">Scott Skinn</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="portfolio">Portfolio</Nav.Link>
          <Nav.Link href="contactForm">Contact</Nav.Link>
          <Nav.Link href="resume">Resume</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactForm">
            <ContactForm />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default MyNav;
