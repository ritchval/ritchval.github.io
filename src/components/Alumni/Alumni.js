import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Alumni.css";

function Alumni() {
  return (
    <Container fluid className="alumni-section">
      <Container>
        <h1 className="section-heading">
          Our <strong className="highlight">Alumni</strong>
        </h1>
        <p className="section-description">
          Former students and researchers who contributed to our work
        </p>
        
        <Row>
          {/* Alumni Item */}
          <Col md={4} className="alumni-card">
            <Card className="alumni-card-view">
              <Card.Img variant="top" src="https://via.placeholder.com/150" className="alumni-img" />
              <Card.Body>
                <Card.Title>Alumni Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ph.D. Graduate, 2022</Card.Subtitle>
                <Card.Text>
                  Currently at [Organization/University]
                </Card.Text>
                <Card.Text>
                  Research focus: [Research Area]
                </Card.Text>
                <div className="alumni-links">
                  <Card.Link href="#" target="_blank" rel="noreferrer">Website</Card.Link>
                  <Card.Link href="#" target="_blank" rel="noreferrer">LinkedIn</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="alumni-card">
            <Card className="alumni-card-view">
              <Card.Img variant="top" src="https://via.placeholder.com/150" className="alumni-img" />
              <Card.Body>
                <Card.Title>Alumni Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">M.S. Graduate, 2023</Card.Subtitle>
                <Card.Text>
                  Currently at [Organization/University]
                </Card.Text>
                <Card.Text>
                  Research focus: [Research Area]
                </Card.Text>
                <div className="alumni-links">
                  <Card.Link href="#" target="_blank" rel="noreferrer">Website</Card.Link>
                  <Card.Link href="#" target="_blank" rel="noreferrer">LinkedIn</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="alumni-card">
            <Card className="alumni-card-view">
              <Card.Img variant="top" src="https://via.placeholder.com/150" className="alumni-img" />
              <Card.Body>
                <Card.Title>Alumni Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Post-doctoral Researcher, 2020-2022</Card.Subtitle>
                <Card.Text>
                  Currently at [Organization/University]
                </Card.Text>
                <Card.Text>
                  Research focus: [Research Area]
                </Card.Text>
                <div className="alumni-links">
                  <Card.Link href="#" target="_blank" rel="noreferrer">Website</Card.Link>
                  <Card.Link href="#" target="_blank" rel="noreferrer">LinkedIn</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Alumni;