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
                <Card.Title>Jesus David Yong Sam</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">B.S. in Chemical Engineering, 2018</Card.Subtitle>
                <Card.Text>
                  Instituto Tecnológico de los Mochis
                </Card.Text>
                <Card.Text>
                  Thesis: Evaluación de hidróxidos de doble capa a base de metales de transición dopados con puntos cuánticos de carbono en la disociación de agua (Co-director)
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
                <Card.Title>Guillermo Pereda Martínez</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">B.S. in Nanotechnology, 2019</Card.Subtitle>
                <Card.Text>
                  Universidad Autónoma de Baja California
                </Card.Text>
                <Card.Text>
                  Thesis: Injerto de un monómero zwitteriónico sobre PVC por radiación gamma para aplicaciones biomédicas: Síntesis y evaluación (Co-director)
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