import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";


export const Projects = () => {

  const [embedURL] = useState('https://drive.google.com/file/d/1L39gNG53gBhHHjb5wEfaUyoPt0H_G25h/preview')
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "Click to see the source code.",
      imgUrl: projImg1,
      projectUrl: 'https://github.com/Code-Maniac-Rza/movie-recommendation-app'
    },
    {
      title: "Daily Journal",
      description: "Jot down your ideas in one click",
      imgUrl: projImg2,
      projectUrl: 'https://daily-journal-dki4.onrender.com/'
    },
    {
      title: "Admin Panel",
      description: "Created an Admin Panel using React.",
      imgUrl: projImg3,
      projectUrl: ''
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Know More about me</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Contact Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="secondTab">
                    <iframe src={embedURL} width="640" height="480" allow="autoplay" ></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Email me: rzashahryar896@gmail.com</p>
                      <p>Phone: +91-7461801538</p>
                      <p>Connect on LinkedIn: <a href="https://www.linkedin.com/in/shahryar-rza/" style={{color: "white"}}>Click Here</a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
