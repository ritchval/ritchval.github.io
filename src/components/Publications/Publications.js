import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Publications.css";

function Publications() {
  return (
    <Container fluid className="publications-section">
      <Container>
        <h1 className="section-heading">
          My <strong className="highlight">Publications</strong>
        </h1>
        <p className="section-description">
          Recent research papers and academic contributions
        </p>
        <Row>
          {/* Publication Item */}
          <Col md={6} className="publication-card">
            <Card className="publication-card-view">
              <Card.Body>
                <Card.Title>Research Paper Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Authors: Ritch Valdez, et al.</Card.Subtitle>
                <Card.Text>
                  Published in Journal Name, 2023
                </Card.Text>
                <Card.Text>
                  Brief description of the research and its impact.
                </Card.Text>
                <Card.Link href="#" target="_blank" rel="noreferrer">
                  View Paper
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Add more publication items as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;