import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Founder.css"; // Changed from ./About.css

function Founder() { // Renamed from About
  return (
    <Container fluid className="about-section"> {/* Class name can remain or be changed to founder-section if desired */}
      <Container>
        <Row className="about-content"> {/* Class name can remain or be changed */}
          <Col md={8} className="about-description"> {/* Class name can remain or be changed */}
            <h1 className="section-heading">
              About The <strong className="highlight">Founder</strong> {/* Updated heading */}
            </h1>
            <p className="about-text">
              I am Ricardo Valdez, a professor researcher at the Instituto Tecnológico de Tijuana. I completed my PhD in Science and Engineering of Materials at the Universidad Nacional Autónoma de México (UNAM) in 2015. Following my PhD, from 2015 to 2017, I held a postdoctoral position at the Centro de Investigación y Desarrollo Tecnológico en Electroquímica (CIDETEQ), where I focused on developing nanomaterials for water oxidation, a key half-reaction in artificial photosynthesis. My research is primarily oriented towards the design and synthesis of catalysts for clean energy production.
              I have been a member of the Sistema Nacional de Investigadores (SNI) Level 1 since 2016 and have published over 25 scientific articles, which have garnered more than 387 citations. I also contribute to teaching at the Centro de Graduados e Investigación en Química.
            </p>
            
            <h2 className="section-subheading">Education</h2>
            <ul className="education-list">
              <li>
                <strong>Ph.D. in Science and Engineering of Materials</strong> - Universidad Nacional Autónoma de México (UNAM), 2015
              </li>
              <li>
                <strong>Postdoctoral Researcher</strong> - Centro de Investigación y Desarrollo Tecnológico en Electroquímica (CIDETEQ), 2015-2017
              </li>
              <li>
                <strong>B.S. in Chemical Engineering</strong> - Instituto Tecnológico de los Mochis
              </li>
            </ul>
            
            <h2 className="section-subheading">Research Interests</h2>
            <ul className="interests-list">
              <li>Design and synthesis of catalysts for clean energy production</li>
              <li>Nanomaterials for water oxidation (artificial photosynthesis)</li>
              <li>Development of materials for sustainable energy technologies</li>
              <li>Electrocatalysis and photocatalysis</li>
            </ul>
          </Col>
          <Col md={4} className="about-img">
            <img 
              src="/assets/images/Profile.jpg" 
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

export default Founder; // Renamed from About