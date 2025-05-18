import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="section-heading">
          My <strong className="highlight">Projects</strong>
        </h1>
        <p className="section-description">
          Some of my academic and research projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src="https://via.placeholder.com/500x300" alt="project image" />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  Description of the project, goals, and outcomes.
                </Card.Text>
                <Card.Text>
                  <strong>Technologies:</strong> Technology 1, Technology 2
                </Card.Text>
                <Card.Link href="#" target="_blank" rel="noreferrer">
                  View Project
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Add more project cards as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;