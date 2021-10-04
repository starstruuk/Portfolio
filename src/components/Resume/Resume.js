import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Rohit-Ramesh.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Types3 from "./Types3";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
      <strong className="purple"><Types3 /></strong>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="XR Developer [Alter Learning]"
              date="July 2021 - Present"
              content={[
                "Developing XR applications for affordable education to students currently living in unfortunate situations"
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="UI/UX Developer [Youth India Foundation]"
              date="July 2021 - Present"
              content={[
                "Created UX designs for front and back-end, using Figma and Adobe XD"
              ]}
            />
            <Resumecontent
              title="Senior Officer [Bhumi]"
              date="October 2018 - January 2021"
              content={[
                "Operated on multiple volunteering expeditions, managing over 200+ volunteers and was part of one of Bhumi's largest student chapters"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Global Study Program [University of California, Davis] "
              date="2021 - Present"
              content={[]}
            />
            <Resumecontent
              title="Open Studies [Xamk Southeast Finland University]"
              date="2020 - 2021"
              content={["Total credits recieved: 25"]}
            />
            <Resumecontent
              title="Bachelor's in Computer Science and Engineering [SRM Institute of Science and Technology] "
              date="2018 - Present"
              content={["Current GPA: 9.68"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Ranked in the Top 10% in the academic batch of 2022`,
                `Top performer in Analytical skills in the batch of 2022`,
                `Recieved 3rd place in AngelHack Hackathon`,
                `Reached the final round of ACM MMCOE Hacksprint v2.0`
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
