import { Switch, Route, Link } from "react-router-dom";
import '../../App.css'
import Nav from "react-bootstrap/Nav";
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';

function MyNav() {
  return (
    <>
      <h1>Scott Skinn</h1>

    
      <Nav className="justify-content-end" bg="dark" variant="dark" expand="lg" sticky="top">
        <Nav.Item>
          <Link to="/about">About</Link>
        </Nav.Item>
          <Link to="/contactForm">Contact</Link>
        <Nav.Item>
          <Link to="/portfolio">Portfolio</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/resume">Resume</Link>
        </Nav.Item>
      </Nav>


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
  );
}

export default MyNav;
