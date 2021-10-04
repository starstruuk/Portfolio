import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import anti from "../../Assets/Projects/Anti_ViRL.jpg";
import archi from "../../Assets/Projects/ARchitect_Beg.jpg";
import ui from "../../Assets/Projects/ui-prototep.png";
import spaced from "../../Assets/Projects/spaced-out.png";
import indiana from "../../Assets/Projects/indiana souls.png";
import vr from "../../Assets/Projects/VR-SLICE.png";
import Types2 from "./Types2";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent 
        </h1>
        <strong className="purple"><Types2 /></strong>
        <p className="project-desc" style={{ color: "white" }}>
          These are soome of the projects I've previously worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anti}
              isBlog={false}
              title="Anti-ViRL"
              description="Riveting cross-platform multiplayer (both PC and AR mobile applications) created for Angelhack Hackathon, teachinbg the importance of safe hygiene pratices during the pandemic. Recieved 3rd place amongst 300+ participants and recieved praise from US Consulate in Hyderabad."
              link="https://github.com/ReanSchwarzer1/Covid-AR-Shooting-RL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={archi}
              isBlog={false}
              title="ARChitect"
              description="AR application made to bridge the gap between architects and interior designers and their respective customers, allowing them to view in actual size, the current progress of their future homes. Reached the final round of the ACM MMCOE Hackathon v2.0"
              link="https://github.com/tamizhis5n/ARchitech-real-estate-AR-solution"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui}
              isBlog={false}
              title="Dockable UI Prototype for Unreal Engine 4.25"
              description="Created a role-playing style game, allowing you to fill in character details and abilities via a simple filling of a character data sheet. Created using Unreal Engine 4.25 and supports games made in UE 4.25+"
              link="https://github.com/starstruuk/Dockable-UI-for-RPGs-Unreal-Engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaced}
              isBlog={false}
              title="Spaced Out"
              description="Game created for GMTK Game Jam 2020. I worked on the mechanics and level implementation for the game."
              link="https://respawner.itch.io/spaced-out"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indiana}
              isBlog={false}
              title="Indiana Souls"
              description="Created for Brackeys Game Jam 5. I was responsible for implementing the game mechanics and interactables in the game"
              link="https://thatamuzak.itch.io/indiana-souls"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vr}
              isBlog={false}
              title="Virtual Reality Puzzle Room - Vertical Slice"
              description="Created a puzzle training experience for Virtual Reality using Unity 2019.2 and Oculus Rift's Unity Plugin, models and environments were mostly outsourced, but all other technical elements made by me."
              link="https://github.com/starstruuk/VRTKVerticalSlice"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
