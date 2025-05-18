import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./OpenPositions.css";

function OpenPositions() {
  return (
    <Container fluid className="positions-section">
      <Container>
        <h1 className="section-heading">
          Open <strong className="highlight">Positions</strong>
        </h1>
        <p className="section-description">
          Join our research team - current opportunities for students and researchers
        </p>
        
        <Row>
          {/* PhD Position */}
          <Col lg={6} className="position-card">
            <Card className="position-card-view">
              <Card.Body>
                <div className="position-badge ph-d">PhD</div>
                <Card.Title>PhD Position in [Research Area]</Card.Title>
                <Card.Text>
                  We are seeking motivated PhD candidates to join our research group. 
                  The successful candidate will work on [research topic] with a focus on [specific aspects].
                </Card.Text>
                <Card.Text>
                  <strong>Requirements:</strong>
                  <ul>
                    <li>Master's degree in [relevant field]</li>
                    <li>Strong background in [relevant subjects]</li>
                    <li>Excellent programming skills in [languages/frameworks]</li>
                    <li>Good command of English</li>
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Application Deadline:</strong> [Date]
                </Card.Text>
                <Card.Link href="#" className="apply-btn">Apply Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Master's Position */}
          <Col lg={6} className="position-card">
            <Card className="position-card-view">
              <Card.Body>
                <div className="position-badge masters">Master's</div>
                <Card.Title>Master's Thesis in [Research Area]</Card.Title>
                <Card.Text>
                  We offer Master's thesis projects in [research topic]. 
                  The project will involve [description of work].
                </Card.Text>
                <Card.Text>
                  <strong>Requirements:</strong>
                  <ul>
                    <li>Bachelor's degree in [relevant field]</li>
                    <li>Courses completed in [relevant subjects]</li>
                    <li>Interest in [specific research areas]</li>
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Start Date:</strong> Flexible
                </Card.Text>
                <Card.Link href="#" className="apply-btn">Contact for Details</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Postdoc Position */}
          <Col lg={6} className="position-card">
            <Card className="position-card-view">
              <Card.Body>
                <div className="position-badge postdoc">Postdoc</div>
                <Card.Title>Postdoctoral Research Position</Card.Title>
                <Card.Text>
                  A postdoctoral position is available in our group to work on [research project]. 
                  The project is funded by [funding source] and will focus on [research goals].
                </Card.Text>
                <Card.Text>
                  <strong>Requirements:</strong>
                  <ul>
                    <li>PhD in [relevant field]</li>
                    <li>Research experience in [specific area]</li>
                    <li>Publication record in relevant journals</li>
                    <li>Experience with [relevant methods/techniques]</li>
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Position Duration:</strong> [Duration] years
                </Card.Text>
                <Card.Link href="#" className="apply-btn">Apply Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Research Assistant Position */}
          <Col lg={6} className="position-card">
            <Card className="position-card-view">
              <Card.Body>
                <div className="position-badge ra">RA</div>
                <Card.Title>Research Assistant Position</Card.Title>
                <Card.Text>
                  We are looking for a research assistant to support our project on [research topic]. 
                  This is a part-time position suitable for undergraduate students.
                </Card.Text>
                <Card.Text>
                  <strong>Responsibilities:</strong>
                  <ul>
                    <li>Assist with data collection and analysis</li>
                    <li>Help with experiment setup</li>
                    <li>Literature review and documentation</li>
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Hours:</strong> 10-15 hours per week
                </Card.Text>
                <Card.Link href="#" className="apply-btn">Apply Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col>
            <div className="general-applications">
              <h3>General Applications</h3>
              <p>
                If you are interested in joining our group and don't see a suitable position listed, 
                we encourage you to send a general application. Please include your CV, research interests, 
                and how you could contribute to our team.
              </p>
              <a href="mailto:your.email@institution.edu" className="email-link">
                Contact: your.email@institution.edu
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OpenPositions;