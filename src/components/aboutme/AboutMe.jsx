import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css'; // Ensure this path is correct

import profileImage from '../../assets/profile.png'; // Ensure this path is correct
import mhaccImage from '../../assets/MHACC.png';

const AboutMe = () => {
  return (
    <div className="resume-container">
      <div className="content">
        <section id="about">
          <br />
          <h1>About Me</h1>



          <div className="about-me-image">
            <img
              src={profileImage}
              alt="profile"
              className="profile-picture"
            />
          </div>

          <p>
            I am actively looking for Summer 2025 internships in software engineering, DevOps, and data science, so please feel free to reach out to me via email at ekli@wpi.edu if you are actively recruiting!
          </p>
          <p>I am a rising junior pursuing a Bachelor of Science degree in Computer Science at Worcester Polytechnic Institute along with a minor in Data Science. Throughout my academic and professional journey, I have gained experience in various programming languages including Java, C, C++, JS, and Python. In addition, I have a strong background in problem-solving and DSA.
          </p>
          <p>
            You can click to see my
            <a
              href="https://drive.google.com/file/d/1tc8ifFHdsWrBjNqb-FBXRFRdYgUvrsvZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong style={{ color: 'white' }}> resume </strong>
            </a>
            or check out ways to contact me below.
          </p>
        </section>


        <section id="projects">
          <h1>Projects</h1>
          <div className="projects-container">
            <div className="project">
              <Card style={{ width: '18rem', height:'20rem', margin: '10px' }}>
                <Card.Img variant="top" src={mhaccImage} style={{ height: '150px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Mental Health Platform</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="project">
              <Card style={{ width: '18rem', height:'20rem', margin: '10px' }}>
                <Card.Img variant="top" src={mhaccImage} style={{ height: '150px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Mental Health Platform</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience">
          <h1>Experience</h1>
          <p>Experience details...</p>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
          <p>Email: <a href="mailto:ekli@wpi.edu">ekli@wpi.edu</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/eric-li-2376a3219/" target="_blank" rel="noopener noreferrer">Eric Li</a></p>
          <p>GitHub: <a href="https://github.com/EricLi3" target="_blank" rel="noopener noreferrer">EricLi3</a></p>
          <p>Resume: <a href="https://drive.google.com/file/d/1tc8ifFHdsWrBjNqb-FBXRFRdYgUvrsvZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a></p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;