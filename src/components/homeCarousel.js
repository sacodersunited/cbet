import React from "react"
import { Carousel, Button } from "react-bootstrap"
import CarouselImage1 from "../images/carousel/carousel-1.jpg"
import CarouselImage2 from "../images/carousel/carousel-2.jpg"
import CarouselImage3 from "../images/carousel/carousel-3.jpg"
import CarouselImage4 from "../images/carousel/carousel-4.jpg"

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={CarouselImage1} alt="First slide" />
      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Apply Today</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={CarouselImage2} alt="Third slide" />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={CarouselImage3} alt="Third slide" />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={CarouselImage4} alt="fourth slide" />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>College of Biomedical Equipment Technology</h1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Button className="text-uppercase">Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default HomeCarousel
