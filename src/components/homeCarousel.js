import React from "react"
import { Link } from "gatsby"
import { Carousel, Button, Col, Row } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import CarouselForm from "./CarouselForm"

const CarouselH1 = styled.h1`
  @media (max-width: 575.98px) {
    font-size: 24px !important;
  }
`

const HomeCarousel = props => (
  <Carousel pauseOnHover>
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
            <CarouselH1>College Of Biomedical Equipment Technology</CarouselH1>
            <p>
              Our mission is to provide Healthcare Technology Management (HTM)
              education, training and career services consistent with the
              evolving needs of employers in the healthcare industry.
            </p>
            <Link to="/about">
              <Button className="text-uppercase">Learn More</Button>
            </Link>
          </Carousel.Caption>
        </Col>
        <Col md={4} className="d-none d-sm-block">
          <CarouselForm />
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
        <Col md={8} className="d-none d-sm-block">
          <Carousel.Caption style={{ textAlign: "left" }}>
            <CarouselH1>College Of Biomedical Equipment Technology</CarouselH1>
            <p>Building the Future Healthcare Technology Workforce</p>
            <Link to="/admissions">
              <Button className="text-uppercase">Apply Today</Button>
            </Link>
          </Carousel.Caption>
        </Col>
        <Col md={4}>
          <CarouselForm />
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
            <CarouselH1>College Of Biomedical Equipment Technology</CarouselH1>
            <p>Building the Future Healthcare Technology Workforce</p>
            <Link to="/admissions">
              <Button className="text-uppercase">Apply Today</Button>
            </Link>
          </Carousel.Caption>
        </Col>
        <Col md={4} className="d-none d-sm-block">
          <CarouselForm />
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Img
        fluid={props.images.fourth.childImageSharp.fluid}
        style={{ minHeight: "449px" }}
        className="d-block w-100"
        alt="biomedical technology school
          /biomedical college /biomedical training /online biomedical college /Online biomedical
          training /online biomedical technology school"
      />
      <Row>
        <Col md={8} className="d-none d-sm-block">
          <Carousel.Caption style={{ textAlign: "left" }}>
            <CarouselH1>College Of Biomedical Equipment Technology</CarouselH1>
            <p>Building the Future Healthcare Technology Workforce</p>
            <Link to="/admissions">
              <Button className="text-uppercase">Apply Today</Button>
            </Link>
          </Carousel.Caption>
        </Col>
        <Col md={4}>
          <CarouselForm />
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
)

export default HomeCarousel
