import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import '../../App.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import imgPixaradar from '../../assets/images/pixaradar.jpg';
import imgRunBuddy from '../../assets/images/Run-buddy.jpg';
import imgnAbl from '../../assets/images/n-Abl project.jpg';
import imgPWG from '../../assets/images/Passwrod-generator.jpg';
import imgPhotoport from '../../assets/images/Photo-port.jpg';
import imgDTB from '../../assets/images/Developed-tech-blog.jpg';


function Portfolio() {
  return (
    <Router className='grid'>
    <Container>
      <Row>
        {/* group project 1 */}
        <Col xs={10} md={6}>
        <Card  className='box'>
          <Card.Img variant="top"
                      src={imgPixaradar}
                      className="imgclass"
                      alt="PixaRadar"
                    />
          <Card.Body>
            <Card.Title>PixaRadar</Card.Title>
            <Card.Text>
              This is my first group project. We created an app that can select movie titles based on your mood you select.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://askarrizvi.github.io/project1/" target="_blank">PixaRadar</Card.Link>
            <Card.Link href="https://github.com/askarrizvi/project1" target="_blank">GitHub page</Card.Link>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={10} md={6}>
        {/* group project 2 */}
        <Card className='box'>
          <Card.Img variant="top"
                        src={imgnAbl}
                        className="imgclass"
                        alt="n-Abl"
                      />
          <Card.Body>
              <Card.Title>n-Abl</Card.Title>
              <Card.Text>
                Second group project using Node to make a website the allows user to post comments and reply.
              </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href="https://boiling-bastion-76402.herokuapp.com/" target='_blank'>n-Abl</Card.Link>
            <Card.Link href="https://github.com/askarrizvi/n-abl" target='_blank'>GitHub page</Card.Link>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>

    <Container>
    <Row>
    <Col xs={10} md={6}>
    {/* Run buudy */}
    <Card className='box'>
      <Card.Img variant="top"
                    src={imgRunBuddy}
                    className="imgclass"
                    alt="run buddy app"
                  />
      <Card.Body>
        <Card.Title>Run Buddy</Card.Title>
        <Card.Text>
          First page i made myself using html and css and deployed through github pages.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="https://scottskinn.github.io/run-buddy" target='_blank'>Run Buddy</Card.Link>
        <Card.Link href="https://github.com/scottskinn/run-buddy/tree/main" target='_blank'>GitHub page</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={10} md={6}>
    {/* password generator */}
    <Card className='box'>
      <Card.Img variant="top"
                    src={imgPWG}
                    className="imgclass"
                    alt="password generator"
                  />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
          Generate a random password will input you provide.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="https://scottskinn.github.io/Scott-Password-Generator/" target='_blank'>Password Generator</Card.Link>
        <Card.Link href="https://github.com/scottskinn/Scott-Password-Generator" target='_blank'>GitHub page</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
    <Col xs={10} md={6}>
    {/* developers blog */}
    <Card className='box'>
      <Card.Img variant="top"
                    src={imgDTB}
                    className="imgclass"
                    alt="Developer tech blog"
                  />
      <Card.Body>
        <Card.Title>Developers Tech Blog</Card.Title>
        <Card.Text>
          A blog page made with JS where a user can post comments and reply.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="https://shrouded-escarpment-46174.herokuapp.com/login" target='_blank'>Developers Tech Blog</Card.Link>
        <Card.Link href="https://github.com/scottskinn/Developers-Tech-Blog" target='blank'>GitHub page</Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col xs={10} md={6}>
    {/* photo port */}
    <Card className='box'>
      <Card.Img variant="top"
                    src={imgPhotoport}
                    className="imgclass"
                    alt="PixaRadar"
                  />
      <Card.Body>
        <Card.Title>Photo Port</Card.Title>
        <Card.Text>
          This is a single page app using React.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="https://scottskinn.github.io/photo-port/">Photo Port</Card.Link>
        <Card.Link href="https://github.com/scottskinn/photo-port" target='_blank'>GitHub page</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  </Router>
  );
}

export default Portfolio;
