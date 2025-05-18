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
              I am Ritch Valdez, an academic researcher specializing in [Your Field]. 
              I received my Ph.D. from [University Name] in [Year] and currently work as 
              [Your Position] at [Your Institution].
            </p>
            <p className="about-text">
              My research focuses on [Research Focus]. I am passionate about [Your Interests]
              and dedicated to [Your Goals].
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
              alt="Ritch Valdez" 
              className="img-fluid rounded-circle" 
            />
            <div className="contact-info mt-4">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> your.email@institution.edu
              </p>
              <p>
                <strong>Office:</strong> Building Name, Room Number
              </p>
              <p>
                <strong>Address:</strong> Institution Name, Street, City, Country
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;