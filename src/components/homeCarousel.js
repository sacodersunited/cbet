import React from "react"
import { Carousel, Button } from "react-bootstrap"

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://picsum.photos/id/249/1440/340"
        alt="First slide"
      />
      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Apply Today</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://picsum.photos/id/1060/1440/340"
        alt="Third slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://picsum.photos/id/3/1440/340"
        alt="Third slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default HomeCarousel
