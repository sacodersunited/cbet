import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Slider from "react-slick"
import { TestimonialsData } from "../utils/utility"
import TestimonialCard from "./TestimonialCard"
import TestimonialBackgroundHeader from "./TestimonialBackgroundHeader"

const testimonialStyles = {
  backgroundColor: "#2c3e50",
  backgroundSize: "cover",
  borderRadius: "0 !important",
  padding: "96px 0",
  minHeight: "240px",
}

class Testimonials extends Component {
  componentWillReceiveProps() {
    this.refs.slick.innerSlider.onWindowResized()
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      pauseOnHover: true,
    }

    return (
      <>
        <TestimonialBackgroundHeader
          bgStyle={testimonialStyles}
          page="testimonials-bg.jpg"
        >
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
                image={this.props.images[`profile${index}`]}
              />
            ))}
          </Slider>
        </TestimonialBackgroundHeader>
      </>
    )
  }
}

export default Testimonials
