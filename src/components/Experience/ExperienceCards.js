import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ExperienceCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{marginTop: "10px"}} />
      <Card.Body>
        <Card.Title style={{color: "#e0461f" }}>{props.title}</Card.Title>
        <Card.Subtitle style={{color: "#f7bbeb"}}>{props.subtitle}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify-center", marginTop: "10px" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Company Website"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCards;
