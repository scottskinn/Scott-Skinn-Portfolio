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
        <li>
          <Link to="/About">About</Link>
        </li>
          <Link to="/ContactForm">Contact</Link>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
      </Nav>


      <Switch>
        <Route path="/About">
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
