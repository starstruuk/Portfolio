import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import OrgCard from "./OrgCards";
import Particle from "../Particle";

import alter from "../../Assets/Experience/alter-learning.png";
import siemens from "../../Assets/Experience/siemens.png";
import strokes from "../../Assets/Experience/differentstrokes.png";
import Types from "./Types";
import { BiFontSize } from "react-icons/bi";
import simple from "../../Assets/Experience/transport-simple.png";
import initiatives from "../../Assets/Experience/iventors.png";
import fuel from "../../Assets/Experience/woqod.png";
import tech from "../../Assets/Experience/nexttech.png";
import sigchi from "../../Assets/Experience/acm-sigchi.png";
import ieee from "../../Assets/Experience/srm-ieee.png";
import yif from "../../Assets/Experience/yif.png";
import bhumi from "../../Assets/Experience/bhumi.png";
import sudha from "../../Assets/Experience/sudha.png";
import mwb from "../../Assets/Experience/mwb.png";
import arush from "../../Assets/Experience/aaruush.png";
import dsa from "../../Assets/Experience/dsa.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div id="experience-header">
        <h1 className="project-heading">
          Work 
        </h1>
        <strong className="purple"><Types /> </strong>
        </div>
        <p className="project-desc" style={{ color: "white"}}>
          These are some of the amazing organizations that I have previously worked with!
        </p>
        <h3 className="project-subheading"><b>
          Internships 
          </b>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={alter}
              isBlog={false}
              title="XR Developer"
              subtitle="Alter Learning Private Ltd. (July 2021 - Present)"
              description="Currently working on an augmented reality space application teaching young minds about space"
              link="https://alter-learning.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={siemens}
              isBlog={false}
              title="UI/UX Developer"
              subtitle="Siemens Technology Private Ltd. (June 2021 - August 2021)"
              description="Worked in the Advanta division, on a managerial scheduling application. Created basic UX design prototypes and worked on the application's front-end."
              link="https://www.siemens-advanta.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={strokes}
              isBlog={false}
              title="3D Product Designer"
              subtitle="Different Strokes (June 2020 - September 2020)"
              description="Created 3D product designs and animations for outsourced projects, working directly under company head product manager"
              link="https://www.differentstrokes.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={simple}
              isBlog={false}
              title="Graphics Designer"
              subtitle="TransportSimple (April 2021 - August 2021)"
              description="Created engaging graphics content for company website, social media pages and blogsite"
              link="https://www.transportsimple.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={initiatives}
              isBlog={false}
              title="Social Media and Graphics Design Manager"
              subtitle="IVentors Initiatives Pvt. Ltd. (May 2020 - October 2020)"
              description="Managed the social media, marketing and graphics design teams (20+ employees). Created content for social media pages and multiple webpages for IVentor's ventures."
              link="https://ivaraedu.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={fuel}
              isBlog={false}
              title="Visual Designer"
              description="Designed riveting graphics elements for company's new product, both presentation and webpage."
              link="http://www.woqod.com/"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className="project-subheading"><b>
          Technical Organizations 
          </b>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <OrgCard
              imgPath={tech}
              isBlog={false}
              title="Board Member and Undergraduate Developer"
              subtitle="Next Tech Labs (July 2019 - Present)"
              description="Heading over 100+ aspiring undergraduate researchers and developers in award-winning student-run research laboratory, covering upcoming technologies such as AI, IoT, HCI and Blockchain. Awarded the QS Silver Award in 2018."
              link="https://github.com/nexttechlab`"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={sigchi}
              isBlog={false}
              title="Treasurer and Senior Officer"
              subtitle="SRM ACM SIGCHI (January 2020 - Present)"
              description="Spearheaded culmination of Computer-Human Interaction via ACM SIG Student Chapter. Conducted workshops, talks and expanded community to discuss and develop in the different spectra of CHI"
              link="https://sigchi.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={ieee}
              isBlog={false}
              title="Student Developer"
              subtitle="Research and Development Team, IEEE SRM Student Chapter (December 2020- Present)"
              description="Worked on a multitude of projects under IEEE Student banner, primarily CHI-oriented. Rated one of the best members of the Research and Development Team (as of September 2020)"
              link="https://www.ieeesrmist.in/"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className="project-subheading"><b>
          Non-technical Organizations 
          </b>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <OrgCard
              imgPath={yif}
              isBlog={false}
              title="UI/UX Developer"
              subtitle="Youth India Foundation (July 2020 - Present)"
              description="Worked for Padma-Shri nominated non-profit organization, working on their website. Created user-friendly and appealing designs for non-profit's main website, currently in the process of development"
              link="https://www.youthindiafoundation.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={bhumi}
              isBlog={false}
              title="Senior Officer"
              subtitle="Bhumi (October 2018 - January 2021)"
              description="One of the largest non-government organizations in India, I was a part of one of the largest student chapters of Bhumi across India, later on being one of the core members of the student chapter. Conducted 15+ events, collaborated with numerous other non-profits across the city of Chennai and managed over 2000+ volunteers over the span of 2.5 years"
              link="https://bhumi.ngo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={sudha}
              isBlog={false}
              title="Student Volunteer"
              subtitle="SUDHA Society (January 2021 - July 2021)"
              description="One of the largest educational non-profit organizations in Delhi, India, SUDHA is aimed at providing education to the less fortunate to whoever seeks for it. I was involved in creating graphic designs for volunteering items and teaching students enrolled under the SUDHA Society Education programme."
              link="https://www.sudhasesudhar.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={mwb}
              isBlog={false}
              title="Student Volunteer"
              subtitle="Mentors Without Borders (January 2021 - April 2021)"
              description="Trained under one of the largest volunteer-run educational organizations across the world for roughly 4 months."
              link="https://www.mentorswithoutborders.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={arush}
              isBlog={false}
              title="Committee Member"
              subtitle="AARUUSH (August 2018 - August 2019)"
              description="Worked for the Quality Assurance Team for one of India's largest technological festivals"
              link="https://links.aaruush.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OrgCard
              imgPath={dsa}
              isBlog={false}
              title="Committee Head and Volunteer"
              subtitle="Directorate of Student Affairs (November 2018 - April 2021)"
              description="Worked simultaneously for Disciplinary Committee and Social Club under the main student authority in SRM."
              link="https://www.srmmilan.org/"
            />
          </Col>
        </Row>
      </Container>
    </Container>

    
  );
}

export default Experience;
