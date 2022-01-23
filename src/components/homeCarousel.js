import React from "react"
import { Carousel, Button, Col, Row } from "react-bootstrap"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const CarouselH1 = styled.h1`
  @media (max-width: 575.98px) {
    font-size: 24px !important;
  }
`

const mission =
  "The College of Biomedical Equipment Technology provides innovative and relevant Healthcare Technology Management, Compliance, and Imaging education, training, and career services to prepare our students to meet the evolving needs of employers in the healthcare Industry."

const HomeCarousel = (props) => (
  <Carousel pauseonhover="true">
    <Carousel.Item>
      <Img
        fluid={props.images.second.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
        alt="biomedical technology school /biomedical college /biomedical training
          /online biomedical college /Online biomedical training /online biomedical technology
          school"
      />
      <Row>
        <Col md={8}>
          <Carousel.Caption style={{ textAlign: "left" }}>
            <CarouselH1>College of Biomedical Equipment Technology</CarouselH1>
            <p>{mission}</p>
            <a href="https://w7ler1bdyy8.typeform.com/to/YKOHKJGE">
              <Button className="text-uppercase">Learn More</Button>
            </a>
          </Carousel.Caption>
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Img
        fluid={props.images.first.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
        alt="biomedical technology school
          /biomedical college /biomedical training /online biomedical college /Online biomedical
          training /online biomedical technology school"
      />
      <Row>
        <Col md={8}>
          <Carousel.Caption style={{ textAlign: "left" }}>
            <CarouselH1>College of Biomedical Equipment Technology</CarouselH1>
            <p>Building the Future Healthcare Technology Workforce</p>
            <a href="https://w7ler1bdyy8.typeform.com/to/YKOHKJGE">
              <Button className="text-uppercase">Learn More</Button>
            </a>
          </Carousel.Caption>
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Img
        fluid={props.images.third.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
        alt="Third slide"
      />
      <Row>
        <Col md={8}>
          <Carousel.Caption style={{ textAlign: "left" }}>
            <CarouselH1>College of Biomedical Equipment Technology</CarouselH1>
            <p>Building the Future Healthcare Technology Workforce</p>
            <a href="https://w7ler1bdyy8.typeform.com/to/YKOHKJGE">
              <Button className="text-uppercase">Learn More</Button>
            </a>
          </Carousel.Caption>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
)

export default HomeCarousel
