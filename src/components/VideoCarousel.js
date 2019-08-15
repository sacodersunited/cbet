import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Jumbotron, Container, Button, Row, Col } from "react-bootstrap"

const VideoCarousel = ({
  vidSrc,
  title,
  descr,
  buttonLink,
  isInternalLink,
  children,
}) => (
  <Jumbotron
    fluid
    style={{
      zIndex: -1,
      position: "relative",
      overflow: "hidden",
      backgroundColor: "black",
      height: "500px",
    }}
  >
    <video
      id="video"
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        zIndex: 1,
        top: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.5,
      }}
    >
      <source src={vidSrc} type="video/mp4" />
    </video>
    <Container
      style={{ zIndex: 2, position: "absolute", bottom: "90px", left: "90px" }}
      className="text-white"
    >
      <Row>
        <Col xs={8}>
          <h1>{title}</h1>
          <p>{descr}</p>
          {children}
          {buttonLink ? (
            isInternalLink ? (
              <Link to={buttonLink}>
                <Button className="text-uppercase">Learn More</Button>
              </Link>
            ) : (
              <Button style={{ zIndex: "100" }} href={buttonLink}>
                Learn More
              </Button>
            )
          ) : null}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

VideoCarousel.propTypes = {
  vidSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  descr: PropTypes.string,
  buttonLink: PropTypes.string,
  isInternalLink: PropTypes.bool,
  children: PropTypes.node,
}

export default VideoCarousel
