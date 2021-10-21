import { BrowserRouter as Switch, Route } from "react-router-dom";
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
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
          <Nav.Link href="/contactForm">Contact</Nav.Link>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume">Resume</Nav.Link>
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
