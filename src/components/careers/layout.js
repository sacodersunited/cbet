import React from "react"
import PropTypes from "prop-types"
import Layout from "../layout"
import { Container, Col, Row, Button, Image, Badge } from "react-bootstrap"
import JobsCarousel from "./JobsCarousel"
import useJobs from "../../hooks/use-jobs"
import useJobsBG from "../../hooks/use-jobs-bg"

export default function CareersLayout({ children }) {
  const jobs = useJobs()
  const carouselBgImages = useJobsBG()

  return (
    <Layout>
      <>
        <JobsCarousel jobs={jobs} bgImages={carouselBgImages} />
        {children}
        <Row className="mt-5">
          <Container>
            <Row>
              <Col md={6}>
                <section id="externship">
                  <h1 className="text-uppercase">Externships </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus autem ea numquam iste, vitae dignissimos officia
                    velit. Magnam, eveniet, sapiente commodi laudantium eum
                    soluta itaque totam optio eligendi delectus unde!
                  </p>
                  <Button className="text-uppercase">Sign Up</Button>
                </section>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                  rounded
                  fluid
                />
              </Col>
            </Row>
          </Container>
        </Row>
      </>
    </Layout>
  )
}
