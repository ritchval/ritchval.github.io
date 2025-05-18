import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "./Courses.css";

function Courses() {
  return (
    <Container fluid className="courses-section">
      <Container>
        <h1 className="section-heading">
          My <strong className="highlight">Courses</strong>
        </h1>
        <p className="section-description">
          Courses I teach and educational resources
        </p>
        
        <Row>
          {/* Current Courses */}
          <Col lg={12}>
            <h2 className="courses-subtitle">Current Courses</h2>
            
            <Accordion defaultActiveKey="0" className="course-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong>Course Code:</strong> Course Title (Semester Year)
                </Accordion.Header>
                <Accordion.Body>
                  <p><strong>Description:</strong> Comprehensive description of the course and its learning objectives.</p>
                  <p><strong>Schedule:</strong> Days and Times, Location</p>
                  <p><strong>Office Hours:</strong> Days and Times, Location/Virtual Link</p>
                  <p><strong>Course Materials:</strong> <a href="#" target="_blank" rel="noreferrer">Syllabus</a> | <a href="#" target="_blank" rel="noreferrer">Course Website</a></p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>Course Code:</strong> Another Course Title (Semester Year)
                </Accordion.Header>
                <Accordion.Body>
                  <p><strong>Description:</strong> Comprehensive description of the course and its learning objectives.</p>
                  <p><strong>Schedule:</strong> Days and Times, Location</p>
                  <p><strong>Office Hours:</strong> Days and Times, Location/Virtual Link</p>
                  <p><strong>Course Materials:</strong> <a href="#" target="_blank" rel="noreferrer">Syllabus</a> | <a href="#" target="_blank" rel="noreferrer">Course Website</a></p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          
          {/* Previous Courses */}
          <Col lg={12} className="mt-5">
            <h2 className="courses-subtitle">Previously Taught Courses</h2>
            
            <Row>
              <Col md={6} className="course-card mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Course Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Course Code, Years Taught</Card.Subtitle>
                    <Card.Text>
                      Brief description of the course content and format.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} className="course-card mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Course Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Course Code, Years Taught</Card.Subtitle>
                    <Card.Text>
                      Brief description of the course content and format.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} className="course-card mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Course Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Course Code, Years Taught</Card.Subtitle>
                    <Card.Text>
                      Brief description of the course content and format.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} className="course-card mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Course Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Course Code, Years Taught</Card.Subtitle>
                    <Card.Text>
                      Brief description of the course content and format.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;