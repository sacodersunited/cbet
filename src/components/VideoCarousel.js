import React from "react"
import { Link } from "gatsby"
import { Jumbotron, Container, Button } from "react-bootstrap"
import videoTest from "../video/freeVideo.mp4"

const VideoCarousel = () => (
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
      <source src={videoTest} type="video/mp4" />
    </video>
    <script>document.getElementById('video').play();</script>
    <Container
      style={{ zIndex: 2, position: "absolute", bottom: "90px", left: "90px" }}
      className="text-white"
    >
      <h1>College of Biomedical Equipment Technology</h1>
      <p>
        Our mission is to provide Healthcare Technology Management (HTM)
        education, training and career services consistent with the evolving
        needs of employers in the healthcare industry.
      </p>
      <Link to="/about">
        <Button className="text-uppercase">Learn More</Button>
      </Link>
    </Container>
  </Jumbotron>
)

export default VideoCarousel
