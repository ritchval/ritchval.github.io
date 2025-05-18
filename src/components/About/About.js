import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="about-content">
          <Col md={8} className="about-description">
            <h1 className="section-heading">
              About <strong className="highlight">Me</strong>
            </h1>
            <p className="about-text">
              I am Ricardo Valdez, an academic researcher at Tecnológico Nacional de México / Instituto Tecnólogico de Tijuana.
              {/* Add more details about your background */}
            </p>
            
            <h2 className="section-subheading">Education</h2>
            <ul className="education-list">
              <li>
                <strong>Ph.D. in [Field]</strong> - [University Name], [Year]
              </li>
              <li>
                <strong>M.S. in [Field]</strong> - [University Name], [Year]
              </li>
              <li>
                <strong>B.S. in [Field]</strong> - [University Name], [Year]
              </li>
            </ul>
            
            <h2 className="section-subheading">Research Interests</h2>
            <ul className="interests-list">
              <li>[Research Interest 1]</li>
              <li>[Research Interest 2]</li>
              <li>[Research Interest 3]</li>
              <li>[Research Interest 4]</li>
            </ul>
          </Col>
          <Col md={4} className="about-img">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Ricardo Valdez" 
              className="img-fluid rounded-circle" 
            />
            <div className="contact-info mt-4">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> ricardo.valdez@tectijuana.edu.mx
              </p>
              <p>
                <strong>Office:</strong> Tecnológico Nacional de México
              </p>
              <p>
                <strong>Address:</strong> Blvd. Industrial 18881, Cd Industrial, 22430 Tijuana, B.C.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;