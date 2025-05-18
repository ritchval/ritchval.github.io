import React from "react";
import { Container, Row, Col, Card, Nav, Tab } from "react-bootstrap";
import "./Tools.css";

// Placeholder data for tools - you can expand this later
const instructorTools = [
  { id: "it1", title: "Team Creator", description: "Tool to randomly assign students to teams.", link: "#" },
  { id: "it2", title: "Topic Sorter", description: "Randomly assign presentation or project topics.", link: "#" },
  { id: "it3", title: "Teaching Management Templates", description: "Downloadable templates for course planning and management.", link: "#" },
];

const studentTools = [
  { id: "st1", title: "Miller Indices Visualizer (Cubic)", description: "Visualize Miller indices for cubic crystal structures.", link: "#" },
  { id: "st2", title: "Miller Indices Visualizer (Hexagonal)", description: "Visualize Miller indices for hexagonal crystal structures.", link: "#" },
  { id: "st3", title: "Grain Size Calculator Worksheet", description: "Interactive worksheet for ASTM grain size calculations.", link: "#" },
  { id: "st4", title: "Unit Converter for Materials Science", description: "Convert common units used in materials science.", link: "#" },
];

function ToolCard({ tool }) {
  return (
    <Col md={6} lg={4} className="tool-card-col mb-4">
      <Card className="h-100 tool-card-view">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{tool.title}</Card.Title>
          <Card.Text>{tool.description}</Card.Text>
          <Card.Link href={tool.link || "#"} target="_blank" rel="noreferrer" className="mt-auto primary-btn">
            Access Tool
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Tools() {
  return (
    <Container fluid className="tools-section">
      <Container>
        <h1 className="section-heading">
          Useful <strong className="highlight">Tools</strong>
        </h1>
        <p className="section-description">
          A collection of utilities for instructors and students.
        </p>

        <Tab.Container id="tools-tabs" defaultActiveKey="instructors">
          <Row>
            <Col sm={12} className="mb-4">
              <Nav variant="pills" className="justify-content-center tools-nav-pills">
                <Nav.Item>
                  <Nav.Link eventKey="instructors">For Instructors</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="students">For Students</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Tab.Content>
            <Tab.Pane eventKey="instructors">
              <h2 className="subsection-heading">Instructor Tools</h2>
              <Row>
                {instructorTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="students">
              <h2 className="subsection-heading">Student Tools</h2>
              <Row>
                {studentTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </Container>
  );
}

export default Tools;