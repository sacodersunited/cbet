import React from "react"
import { Link } from "gatsby"
import { Carousel, Button } from "react-bootstrap"
import styled from "styled-components"
import CarouselImage1 from "../images/carousel/carousel-1.jpg"
import CarouselImage2 from "../images/carousel/logo.jpg"
import CarouselImage3 from "../images/carousel/carousel-3.jpg"
import CarouselImage4 from "../images/carousel/carousel-4.jpg"

const CarouselH1 = styled.h1`
  @media (max-width: 575.98px) {
    font-size: 24px !important;
  }
`

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        style={{ minHeight: "240px" }}
        className="d-block w-100"
        src={CarouselImage1}
        alt="First slide"
      />
      <Carousel.Caption style={{ textAlign: "left" }}>
        <CarouselH1>College of Biomedical Equipment Technology</CarouselH1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Link to="/admissions">
          <Button className="text-uppercase">Apply Today</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ minHeight: "240px" }}
        className="d-block w-100"
        src={CarouselImage2}
        alt="Second slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <p>
          Our mission is to provide Healthcare Technology Management (HTM)
          education, training and career services consistent with the evolving
          needs of employers in the healthcare industry.
        </p>
        <Link to="/about">
          <Button className="text-uppercase">Learn More</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ minHeight: "240px" }}
        className="d-block w-100"
        src={CarouselImage3}
        alt="Third slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <CarouselH1>College of Biomedical Equipment Technology</CarouselH1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Link to="/admissions">
          <Button className="text-uppercase">Apply Today</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        style={{ minHeight: "240px" }}
        className="d-block w-100"
        src={CarouselImage4}
        alt="Fourth slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <CarouselH1>College of Biomedical Equipment Technology</CarouselH1>
        <p>Building the Future Healthcare Technology Workforce</p>
        <Link to="/admissions">
          <Button className="text-uppercase">Apply Today</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default HomeCarousel
