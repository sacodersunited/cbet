import React from "react"
import { Carousel, Button } from "react-bootstrap"
import styled from "styled-components"

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://picsum.photos/id/249/1440/340"
        alt="First slide"
      />
      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>Biomedical Equipment </h1>
        <h1>and Health Care Technology</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button>Apply Today</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://picsum.photos/id/1060/1440/340"
        alt="Third slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>Biomedical Equipment </h1>
        <h1>and Health Care Technology</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button>Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://picsum.photos/id/3/1440/340"
        alt="Third slide"
      />

      <Carousel.Caption style={{ textAlign: "left" }}>
        <h1>Biomedical Equipment </h1>
        <h1>and Health Care Technology</h1>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        <Button>Learn More</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default HomeCarousel
