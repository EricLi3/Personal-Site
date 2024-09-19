import React from 'react';
import './LandingPage.css'; // Ensure this path is correct
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import logo from '../../assets/wpilogo.png'; // Ensure this path is correct
import NavBar from '../navbar/NavBar';

const LandingPage = () => {
    return (
        <div className="landing-container">

            <div className="card">
                <h1 className="intro-text">Hi, I'm Eric!</h1>
                <img
                    src="https://media.tenor.com/A7eequnhcGwAAAAM/hand.gif"
                    alt="wave"
                    width="50px"
                    height="50px"
                ></img>

                <p className="welcome-text">CS & DS at Worcester Polytechnic Institute</p>

                <img
                    src= {logo}
                    alt="logo"
                    width="75px"
                    height="75px"
                ></img>

                <div className="icons">
                    <a href="mailto:ekli@wpi.edu" target="_blank" rel="noopener noreferrer" className="icon-container email">
                        <FaEnvelope size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/eric-li-2376a3219/" target="_blank" rel="noopener noreferrer" className="icon-container linkedin">
                        <FaLinkedin size={40} />
                    </a>
                    <a href="https://github.com/EricLi3" target="_blank" rel="noopener noreferrer" className="icon-container github">
                        <FaGithub size={40} />
                    </a>
                    <a href="https://drive.google.com/file/d/1dXMSJiY6vmPBTpN42xj1i7Nh2pG7MzFr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="icon-container resume">
                        <FaFileAlt size={40} />
                    </a>
                </div>
            </div>
            <div className="scroll-down">
                <span>&#x2193;</span>
            </div>
        </div>
    );
};

export default LandingPage;