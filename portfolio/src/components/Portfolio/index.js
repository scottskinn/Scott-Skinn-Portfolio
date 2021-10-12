import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import imgPixaradar from '../../assets/images/pixaradar.jpg';
import imgRunBuddy from '../../assets/images/Run-buddy.jpg';
import imgnAbl from '../../assets/images/n-Abl project.jpg';
import imgPWG from '../../assets/images/Passwrod-generator.jpg';
import imgTaskPro from '../../assets/images/Taskmaster.png';
import imgWorkDay from '../../assets/images/Work schedular.png';
import imgGitHub from '../../assets/images/Github-Screenshot.jpg';



function Portfolio() {
  return (
    <Router>
      <div id="My-Work">
        <h2> Group Projects </h2>{" "}
        <div className="flex-container">
          <div className="flex-item">
            <Link
              to={{ pathname:"https://askarrizvi.github.io/project1/"}} target="_blank">
              <img
                src={imgPixaradar}
                className="imgclass"
                alt="PixaRadar"
              />
            </Link>
          </div>

          <div className="flex-item">
            <Link
              to={{ pathname :"https://boiling-bastion-76402.herokuapp.com/"}}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgnAbl}
                className="imgclass"
                alt="n - Abl"
              />
            </Link>
          </div>
        </div>
      </div>

      <div id="My-Work">
        <h2> My Work </h2>
        <div className="flex-container">
          <div className="flex-item col-md-10">
            <Link
              to={{pathname: "https://scottskinn.github.io/run-buddy"}}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgRunBuddy}
                className="imgclass"
                alt="RUN BUDDY"
              />
            </Link>
          </div>

          <div className="flex-item">
            <Link
              to={{ pathname: "https://scottskinn.github.io/Scott-Password-Generator/"}}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgPWG}
                className="imgclass"
                alt="Password Generator"
              />
            </Link>
          </div>

          <div className="flex-item">
            <Link
              to={{ pathname: "https://scottskinn.github.io/taskmaster-pro/"}}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgTaskPro}
                className="imgclass"
                alt="Taskmaster Pro"
              />
            </Link>
          </div>

          <div className="flex-item">
            <Link
              to={{ pathname: "https://scottskinn.github.io/Work-Day-Scheduler/"}}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgWorkDay}
                className="imgclass work-img"
                alt=" Work Day Scheduler"
              />
            </Link>
          </div>
        </div>
      </div>

      <div id="My-Work">
        <h2> GitHub </h2>{" "}
        <div className="flex-container">
          <div className="flex-item">
            <Link
              to={{ pathname: "https://github.com/scottskinn"}}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgGitHub}
                className="imgclass"
                alt="GitHub Profile "
              />
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Portfolio;
