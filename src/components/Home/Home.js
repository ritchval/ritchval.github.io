import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Ricardo Valdez</strong>
              </h1>
              
              <div className="heading-description">
                <p>
                  Academic researcher at Tecnológico Nacional de México / Instituto Tecnólogico de Tijuana.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="profile-image">
                {/* Replace with your profile image */}
                <img 
                  src="/assets/images/Profile.jpg" 
                  alt="Ricardo Valdez" 
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;