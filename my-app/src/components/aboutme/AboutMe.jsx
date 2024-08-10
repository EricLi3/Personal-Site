import React from 'react';
import './AboutMe.css'; // Ensure this path is correct

const AboutMe = () => {
  return (
    <div className="resume-container">
      <div className="sidebar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
      <div className="content">
        <section id="about">
          <br />
          <h1>About Me</h1>
          <h3>
            <b>Hi, I'm Eric</b>
            <img
              src="https://media.tenor.com/A7eequnhcGwAAAAM/hand.gif"
              alt="wave"
              width="50px"
              height="50px"
            />
          </h3>
          
          <p>
            I'm a Junior at <b>Worcester Polytechnic Institute</b>. I'm currently studying <b>Computer
            Science</b> and have an interest in all aspects of programming. I also enjoy being <b>outdoors</b> and <b>gaming</b> like many others.
          </p>
          <p>
            You can click to see my
            <a
              href="https://drive.google.com/file/d/1tc8ifFHdsWrBjNqb-FBXRFRdYgUvrsvZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong style={{ color: 'black' }}> resume </strong>
            </a>
            or check out ways to contact me below.
          </p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="project">
            <img src="project-image-url" alt="Project" />
            <p>Project description...</p>
          </div>
          {/* Add more projects as needed */}
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