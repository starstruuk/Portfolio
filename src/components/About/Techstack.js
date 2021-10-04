import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgGames } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3
} from "react-icons/di";
import { SiFigma } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    </Row>
  );
}

export default Techstack;
