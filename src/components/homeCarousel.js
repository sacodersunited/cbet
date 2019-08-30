import React from "react"
import { Link } from "gatsby"
import { Carousel, Button } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"

const CarouselH1 = styled.h1`
  @media (max-width: 575.98px) {
    font-size: 24px !important;
  }
`

const HomeCarousel = props => (
  <Carousel>
    <Carousel.Item>
      <Img
        fluid={props.images.second.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
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
      <Img
        fluid={props.images.first.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
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
      <Img
        fluid={props.images.third.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
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
      <Img
        fluid={props.images.fourth.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
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
