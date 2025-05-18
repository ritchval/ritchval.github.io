import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub,
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
          <div className="footer-links-paired"> 
            {[
              { to: "/", text: "Home" },
              { to: "/founder", text: "Founder" },
              { to: "/research", text: "Research" },
              { to: "/projects", text: "Projects" },
              { to: "/courses", text: "Courses" },
              { to: "/tools", text: "Tools" }, // Add Tools link
              // Add more links here if needed, ensure even number for perfect pairing or handle odd one
            ].reduce((acc, link, index, array) => {
              if (index % 2 === 0) {
                const pair = [
                  <Link key={link.to} to={link.to}>{link.text}</Link>
                ];
                if (array[index + 1]) {
                  pair.push(<span key={`sep-${index}`} className="link-separator"> | </span>);
                  pair.push(<Link key={array[index + 1].to} to={array[index + 1].to}>{array[index + 1].text}</Link>);
                }
                acc.push(<div key={`pair-${index / 2}`} className="link-pair">{pair}</div>);
              }
              return acc;
            }, [])}
          </div>
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
                href="https://github.com/ritchval"
                target="_blank"
                rel="noreferrer"
                className="icon-colour github-icon"
              >
                <FontAwesomeIcon icon={faGithub} />
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