import React from 'react';
import { Card, Navbar, Nav } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutMe.css'; // Ensure this path is correct

import profileImage from '../../assets/profile.png'; // Ensure this path is correct
import mhaccImage from '../../assets/MHACC.png';
import mmumage from '../../assets/mmu.png';
import flightPath from '../../assets/delta.png';
import songProject from '../../assets/songProject.png';
import wpi from '../../assets/wpilogo.png';
import radicalAI from '../../assets/radicalAI.png';

// import catPlaceholder from '../../assets/funny-dancing-cats-fb3-png__700.jpg';

const AboutMe = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar bg="dark" variant="dark" className="flex-column" style={{ height: '100vh', position: 'fixed', width: '200px' }}>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link href="#skills" style={{ color: 'white' }}>Skills</Nav.Link>
          <Nav.Link href="#projects" style={{ color: 'white' }}>Projects</Nav.Link>
          <Nav.Link href="#experience" style={{ color: 'white' }}>Experience</Nav.Link>
          <Nav.Link href="#contact" style={{ color: 'white' }}>Contact</Nav.Link>
        </Nav>
      </Navbar>

      <div className="resume-container" style={{ padding: '20px', width: '100%' }}>

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
              I am actively looking for Summer 2025 internships in <b>software engineering, DevOps, and data science, </b> so please feel free to reach out to me via email at ekli@wpi.edu if you are actively recruiting!
            </p>
            <p>
              I am a <b><span style={{ color: 'crimson' }}>Junior</span> pursuing a <span style={{ color: 'crimson' }}>Bachelor of Science</span> degree in <span style={{ color: 'crimson' }}>Computer Science</span> at <span style={{ color: 'crimson' }}>Worcester Polytechnic Institute</span></b> along with a <b>minor in <span style={{ color: 'crimson' }}>Data Science</span>.</b> Throughout my academic and professional journey, I have gained experience in various programming languages including <b>Java, C, C++, JS, and Python </b>. In addition, I have a strong background in <b>problem-solving and DSA.</b>
            </p>
            <p>
              You can click to see my
              <a
                href="https://drive.google.com/file/d/1eDjAOsPumTI2z4EHCRc2ZOyfxB1Z3swh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong style={{ color: 'white' }}> resume </strong>
              </a>
              or check out ways to contact me below.
            </p>
          </section>

          <section id="skills">
            <h1>Skills</h1>
            <p><b>Languages: </b>Java; C/C++; Python; JavaScript; x86 assembly; SQL; HTML/CSS; Racket</p>
            <p><b>Technologies: </b>Data Structures and Algorithms, Machine Learning, Spring Boot; Node.js; Flask; JUnit; Bootstrap; React.js</p>
            <p><b>Developer Tools: </b>Linux; MongoDB; Postman; Git; Github Actions; Docker; Firebase; AWS EC2; S3; Agile</p>
          </section>

          <section id="projects">
            <h1>Projects</h1>
            <div className="projects-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

              <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                <Card.Img variant="top" src={songProject} style={{ height: '150px', objectFit: 'cover' }} />
                <br />
                <Card.Body>
                  <Card.Title style={{ color: '#D1D5DB' }}><b> MUSIC DISCOVERY APP </b></Card.Title>
                  <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                    - Developed a <b>REST API</b> using Spring Boot and MongoDB, including 20+ endpoints, and tested it with Postman.
                    <br /><br />
                    - Built a responsive user interface using <b>React/MUI, Bootstrap, and CSS </b>for exploring, rating, and commenting on 200+ songs. Integrating the <b>Last.FM API</b> to fetch song information
                    <br /><br />
                    - Utilized Docker for containerization of the backend and an <b>AWS EC2</b> instance for deployment. Implemented CI/CD pipelines with <b>GitHub Actions</b> to automate deployment to <b>AWS S3</b>, achieving a <b>40% reduction</b> in deployment times.
                  </Card.Text>
                  <br />
                  <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" href="https://github.com/EricLi3/Music-Discovery-API">GitHub</Button>
                    <Button variant="contained" href="http://songchatroom-react-app.s3-website.us-east-2.amazonaws.com/">Website</Button>
                  </Stack>
                </Card.Body>
              </Card>

              <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                <Card.Img variant="top" src={mhaccImage} style={{ height: '150px', objectFit: 'cover' }} />
                <br />
                <Card.Body>
                  <Card.Title style={{ color: '#D1D5DB' }}><b> ASIAN MENTAL HEALTH PLATFORM </b> <br /><i>In association with the Mental Health Association for Chinese Communities</i></Card.Title>
                  <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                    - Led a <b>3-person team</b> to design and implement a platform in <b>7 weeks</b>. Implemented a user-friendly experience using <b>HTML, CSS, and JS.</b> Deployed the site on <b>Firebase</b> and implemented <b>CI/CD using GitHub Actions.</b>
                    <br /><br />
                    - Developed a chatbot with <b>IBM WatsonX</b> incorporating <b>10 intents and 5 entities</b> to connect users to mental health professionals and resources. Also provided <b>multilingual guides</b> on mental health stigma using the <b>Google Translate API.</b>
                    <br /><br />
                    - Presented to <b>30 stakeholders</b>, fielding <b>15 questions</b> and receiving <b>positive feedback</b> on the project's potential.

                  </Card.Text>
                  <br />

                  <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" href="https://github.com/EricLi3/Contemporary-Chinese-Final-Project">GitHub</Button>
                    <Button variant="contained" href="https://contemporary-chinese-final-project.vercel.app/">Website</Button>
                  </Stack>
                </Card.Body>
              </Card>

              <Card className="card-hover" style={{ width: '20rem', height: '30rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                <Card.Img variant="top" src={flightPath} style={{ height: '150px', objectFit: 'cover' }} />
                <br />
                <Card.Body>
                  <Card.Title style={{ color: '#D1D5DB' }}><b> TRANSPORTATION NETWORK ANALYSIS </b></Card.Title>
                  <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                    - Analyzed Delta and Southwest flight networks, processing <b>10,000+ routes</b> with <b>BFS</b> and <b>Floyd-Warshall</b>. Created a tool
                    for <b>shortest, longest, and average flight distances</b>, and determined the <b>longest and shortest path</b> between airports.
                    <br /><br />

                    - Developed a <b>pathfinding system</b> on a <b>10,796-vertex, 12,986-edge U.S. highway network</b>, comparing the <b>effectiveness</b> of <b>BFS, DFS, and Dijkstra’s</b> algorithms for pathfinding
                  </Card.Text>
                  <br />

                  <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" href="https://github.com/EricLi3/CS2223-HW-assignments/blob/main/ekli-HW4.zip">GitHub</Button>
                  </Stack>
                </Card.Body>
              </Card>

              <Card className="card-hover" style={{ width: '20rem', height: '30rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                <Card.Img variant="top" src={mmumage} style={{ height: '150px', objectFit: 'cover' }} />
                <br />
                <Card.Body>
                  <Card.Title style={{ color: '#D1D5DB' }}><b> VIRTUAL MEMORY MANAGER SIMULATION </b></Card.Title>
                  <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                    - Implemented a <b>memory manager in C</b>, simulating virtual memory with <b>paging and swapping</b>, including <b>address translation</b>, per-process <b>page tables</b>, and efficient memory operations within a <b>64-byte simulated</b> physical memory
                    <br /><br />
                    - Enhanced system capabilities by supporting <b>disk swapping</b> with a robust <b>round-robin eviction</b> strategy, ensuring process isolation and resource efficiency

                  </Card.Text>
                  <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" href="https://github.com/EricLi3/Operating-Systems/tree/main/Projects/Project%203">GitHub</Button>
                    {/* <Button variant="contained" href="https://contemporary-chinese-final-project.vercel.app/">Website</Button> */}
                  </Stack>
                </Card.Body>
              </Card>

              {/* </div> */}

            </div>
          </section>

          <section id="experience" style={{ padding: '20px 0', backgroundColor: 'black' }}>
            <h1 style={{ color: 'crimson', textAlign: 'center', marginBottom: '30px' }}>Experience</h1>

            <div className="experienceContainer" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                <Card.Img variant="top" src={wpi} style={{ height: '100px', objectFit: 'cover' }} />
                <br />
                <Card.Body>
                  <Card.Title style={{ color: '#D1D5DB' }}><b> Undergraduate Teaching Assistant @ Worcester Polytechnic Institute </b></Card.Title>
                  <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                    - Provided support for undergraduate courses by holding weekly 3-hour office hours, assisting in lab sections, and grading
                    approximately 90 homework submissions bi-weekly.
                    <br /><br />
                    - Ensured fair and consistent evaluation of student performance.
                    <br /><br />
                    - Developed supplementary materials and tutorials to enhance student understanding of course concepts.
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>

              <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                <Card.Img variant="top" src={radicalAI} style={{ height: '80px', objectFit: 'cover' }} />

                <Card.Body>
                  <Card.Title style={{ color: '#D1D5DB' }}><b> Software Engineer @ Radical AI </b></Card.Title>
                  <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                    - Increased user engagement by 70% by leveraging React (JavaScript) and Redux to overhaul the chat discussion feature, implementing a more intuitive and responsive user interface.
                    <br /><br />
                    - Collaborated closely with AI and Product teams, leveraging Agile Scrum methodologies (including daily stand-ups and sprint planning) to ensure seamless integration and timely deployment of new features.
                    <br /><br />
                    - Demonstrated proficiency in Firebase, Vercel, React.js, Node.js, Express.js, Python, and Git for version control.
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </div>
          </section>

          <section id="contact">
            <h1>Contact Me</h1>
            <p>Email: <a href="mailto:ekli@wpi.edu">ekli@wpi.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/eric-li-2376a3219/" target="_blank" rel="noopener noreferrer">Eric Li</a></p>
            <p>GitHub: <a href="https://github.com/EricLi3" target="_blank" rel="noopener noreferrer">EricLi3</a></p>
            <p>Resume: <a href="https://drive.google.com/file/d/1eDjAOsPumTI2z4EHCRc2ZOyfxB1Z3swh/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;