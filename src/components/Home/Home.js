import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap"; // Added Carousel and Card
import "./Home.css";

// Placeholder news data - replace with your actual news
const newsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x400?text=News+Image+1", // Replace with actual image path
    title: "Important Announcement Regarding Upcoming Conference",
    caption: "Join us for the annual tech conference this fall. Early bird registration is now open!",
    link: "#news-detail-1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x400?text=News+Image+2",
    title: "New Research Paper Published by Dr. Valdez",
    caption: "Dr. Valdez's latest research on nanomaterials has been published in a prestigious journal.",
    link: "#news-detail-2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x400?text=News+Image+3",
    title: "Student Project Wins National Award",
    caption: "A team of our students has won first place in the national engineering design competition.",
    link: "#news-detail-3",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/800x400?text=News+Image+4",
    title: "Workshop on Advanced Catalysis Techniques",
    caption: "Register now for our upcoming workshop focusing on the latest advancements in catalysis.",
    link: "#news-detail-4",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/800x400?text=News+Image+5",
    title: "Collaboration with Industry Partner Announced",
    caption: "We are excited to announce a new collaborative project with a leading industry partner.",
    link: "#news-detail-5",
  },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi there,{" "}
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
                  Thank you for visiting our Research Group page. We are dedicated to advancing the frontiers of science and engineering.
                </p>
                <p className="mt-3 fst-italic">
                  "If you have the ability and the resources to contribute, you also have the obligation." – Haldor Topsoe
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="group-logo-container"> {/* Changed class name */}
                <img 
                  src="/assets/images/Logo.png" // Path to your group logo
                  alt="Ricardo Valdez Research Group Logo" 
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* News Section */}
      <Container fluid className="news-section-container" id="news">
        <Container>
          <Row>
            <Col>
              <h2 className="news-section-title">NEWS</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel 
                interval={6000} 
                className="news-carousel"
                indicators={true} // Show dot indicators
                // nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom-arrow" />} // Custom arrows if needed
                // prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon custom-arrow" />}
              >
                {newsData.map((news) => (
                  <Carousel.Item key={news.id}>
                    <a href={news.link} target="_blank" rel="noopener noreferrer" className="news-card-link">
                      <Card className="news-card">
                        <Card.Img variant="top" src={news.image} className="news-card-image" />
                        <Card.Body className="news-card-body">
                          <Card.Title className="news-card-title">{news.title}</Card.Title>
                          <Card.Text className="news-card-caption">
                            {news.caption}
                          </Card.Text>
                          {/* <Button variant="primary" size="sm" className="news-read-more">Read More</Button> */}
                        </Card.Body>
                      </Card>
                    </a>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;