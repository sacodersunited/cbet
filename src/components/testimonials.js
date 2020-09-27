import React, { useRef } from "react"
import { Container, Card } from "react-bootstrap"
import Slider from "react-slick"
import Img from "gatsby-image"
import TestimonialBackgroundHeader from "./TestimonialBackgroundHeader"
import UseTestimonials from "../hooks/use-testimonials"

const testimonialStyles = {
  backgroundColor: "#2c3e50",
  backgroundSize: "cover",
  borderRadius: "0 !important",
  padding: "96px 0",
  minHeight: "240px",
}

const Testimonials = () => {
  const testimonials = UseTestimonials()
  const refSlick = useRef("slick")

  let settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    pauseonhover: true,
  }

  return (
    <>
      <TestimonialBackgroundHeader
        bgStyle={testimonialStyles}
        page="testimonials-bg.jpg"
      >
        <Container>
          <h2
            className="mb-5"
            style={{ textTransform: "uppercase", color: "#212121" }}
          >
            Hear From Our Students Around the World
          </h2>
        </Container>

        <Slider ref={refSlick} {...settings}>
          {testimonials.map((testimonial, index) => (
            <Card id={testimonial.id} style={{ maxWidth: "380.41px", height: "60em"}} key={testimonial.id}>
              <Img
                fluid={testimonial.image.childImageSharp.fluid}
                alt="biomedical technology school /biomedical college /biomedical training
          /online biomedical college /Online biomedical training /online biomedical technology
          school"
                style={{ minHeight: "25em" }}
              />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text className="mt-0 mb-0 font-weight-bold">
                  {testimonial.type}
                </Card.Text>
                <Card.Text className="mt-0 mb-0 text-muted">
                  {testimonial.date}
                </Card.Text>
                <Card.Text className="mt-0 mb-3 font-italic">
                  {testimonial.state}
                </Card.Text>
                <Card.Text style={{ height: "18.750em", maxWidth: "330px", overflow: "auto" }}>
                  {testimonial.comment}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </TestimonialBackgroundHeader>
    </>
  )
}

export default Testimonials
