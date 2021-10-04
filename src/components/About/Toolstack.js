import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiUnity,
  SiUnrealengine,
  SiGodotengine,
  SiBlender,
  SiReact,
  SiFigma,
  SiAdobecreativecloud
} from "react-icons/si";
import {DiGit, DiReact} from "react-icons/di";
import {CgGames} from "react-icons/cg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGodotengine />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <CgGames />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>

    </Row>
  );
}

export default Toolstack;
