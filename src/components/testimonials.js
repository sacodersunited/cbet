import React, { Component } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import Slider from "react-slick"
import { TestimonialsData } from "../utils/utility"
import TestimonialBG from "../images/testimonials/testimonials-bg.jpg"
import TestimonialCard from "./TestimonialCard"

const TestimonialsSection = styled.section`
  padding: 96px 0;
  background-color: #f8f9fa;
  background-image: url(${props => props.imgsrc || null});
  border-radius: 0 !important;
  background-size: cover;
  min-height: 240px;
`

class Testimonials extends Component {
  componentWillReceiveProps() {
    this.refs.slick.innerSlider.onWindowResized()
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      pauseOnHover: true,
    }
    return (
      <TestimonialsSection imgsrc={TestimonialBG}>
        <Container>
          <h2
            className="mb-5 text-white"
            style={{ textTransform: "uppercase" }}
          >
            Hear From Our Students Around the World
          </h2>
        </Container>

        <Slider ref="slick" {...settings}>
          {TestimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              person={testimonial}
              index={index}
            />
          ))}
        </Slider>
      </TestimonialsSection>
    )
  }
}

export default Testimonials
