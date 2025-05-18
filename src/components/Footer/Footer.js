import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub,
  faLinkedin,
  faTwitter,
  faResearchgate,
  faOrcid
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
          <h3>Ritch Valdez</h3>
          <p>[Your Institution]</p>
          <p>[Department/Faculty]</p>
          <p>[Address]</p>
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
                href="mailto:your.email@institution.edu"
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
                href="https://orcid.org/your-orcid-id"
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
            Copyright © {year} Ritch Valdez | All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;