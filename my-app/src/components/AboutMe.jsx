import React from 'react';
import './style.css'; // Ensure this path is correct

const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="title">About Me</h1>
      <div className="about-content">
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
          I'm a sophomore at <b>Worcester Polytechnic Institute</b>. I'm currently studying <b>Computer
          Science</b> and have an interest in all aspects of programming. I also enjoy being <b>outdoors</b> and <b>gaming</b> like many others.
        </p>
        <p>
          You can click to see my
          <a
            href="https://drive.google.com/file/d/1eDjAOsPumTI2z4EHCRc2ZOyfxB1Z3swh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong style={{ color: 'black' }}>resume</strong>
          </a>
          or check out ways to contact me below.
        </p>
        <a href="mailto:ekli@wpi.edu" target="_blank" rel="noopener noreferrer">
          <img
            className="img-fluid"
            alt="mail"
            width="15px"
            src="https://www.svgrepo.com/show/16431/at-symbol.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-li-2376a3219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid"
            alt="linkedin link"
            width="15px"
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png"
          />
        </a>
        <a
          href="https://github.com/EricLi3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid"
            alt="github"
            width="15px"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
