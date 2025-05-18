import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub,
  faLinkedin,
  faTwitter,
  faResearchgate,
  faOrcid,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <h3>Ricardo Valdez</h3>
          <p>Tecnológico Nacional de México</p>
          <p>Instituto Tecnólogico de Tijuana</p>
          <p>Blvd. Industrial 18881, Cd Industrial, 22430 Tijuana, B.C.</p>
        </Col>
        
        <Col md="4" className="footer-body">
          <h3>Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </Col>
        
        <Col md="4" className="footer-body">
          <h3>Connect</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:ricardo.valdez@tectijuana.edu.mx"
                target="_blank"
                rel="noreferrer"
                className="icon-colour email-icon"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="icon-colour github-icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="icon-colour linkedin-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="icon-colour twitter-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://scholar.google.com.mx/citations?user=5u9mViAAAAAJ"
                target="_blank"
                rel="noreferrer"
                className="icon-colour scholar-icon"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://researchgate.net/profile/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="icon-colour researchgate-icon"
              >
                <FontAwesomeIcon icon={faResearchgate} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://orcid.org/0000-0001-8196-0027"
                target="_blank"
                rel="noreferrer"
                className="icon-colour orcid-icon"
              >
                <FontAwesomeIcon icon={faOrcid} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="footer-copyright">
          <p>
            Copyright © {year} Ricardo Valdez | All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;