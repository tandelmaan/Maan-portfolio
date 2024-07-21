import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import cpp from '../../Assets/Projects/cpp.png'
import Bookstore from "../../Assets/Projects/Bookstore.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import Jscompo from "../../Assets/Projects/Jscompo.png";
import Frontendwithai from '../../Assets/Projects/Frontendwithai.png'

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Tech-Shop Website"
              description="I have developed a responsive e-commerce website using ReactJS . This project features a user-friendly interface with an 'Add to Cart' functionality, an automatic price generator, and smooth browsing capabilities. The website is designed to provide an engaging shopping experience . "
              ghLink="https://github.com/tandelmaan/Tech-Shop-website"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode.You can get all of my technical information there .You can get all my technical & work related informatio hear ."
              ghLink="https://github.com/tandelmaan/Maan-portfolio"
              demoLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Bookstore}
              title="Mernstack-bookstore"
              description="I created a MERN project named Bookstore, which includes functionalities such as book search and user login. This project utilizes the MERN stack (MongoDB, Express.js, React, and Node.js) to provide a seamless user experience. Users can search for books by title, author, or genre ."
              ghLink="https://github.com/tandelmaan/Mernstack-bookstore"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Jscompo}
              title="Js Component"
              description="In this java script component you will find all types of Java components from basic to advanced. Js component like Function , pure compo , routers and Render life cycle method etc components are there . "
              ghLink="https://github.com/tandelmaan/JS-component"
              demoLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Frontendwithai}
              title="Front-end With only AI"
              description="I created a frontend entirely with AI, without writing a single line of code. For this, I used tools like ChatGPT, Material UI, Bing, and Blackbox. These tools enabled me to generate and refine the user interface efficiently. "
              ghLink="https://github.com/tandelmaan/React-Frontend-with-AI"
              demoLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={cpp}
              title="C++"
              description="In this project, I developed three applications using C++. The first is a bank ATM simulation, which handles basic transactions like withdrawals, deposits, and balance inquiries. The second is a coffee shop management system, where users can place orders and the system processes them accordingly."
              ghLink="https://github.com/tandelmaan/C-repo"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
