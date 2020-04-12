import React from "react"
import Slide from "react-reveal/Slide"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useJobs from "../hooks/use-jobs"
import useJobsBG from "../hooks/use-jobs-bg"
import useEvents from "../hooks/use-events"
import JobsCarousel from "../components/careers/JobsCarousel.js"
import JobDetail from "../components/careers/JobDetail"
import { Container, Col, Row, Button, Image, Badge } from "react-bootstrap"

export default function Careers() {
  const jobs = useJobs()
  const carouselBgImages = useJobsBG()
  const events = useEvents()

  return (
    <Layout>
      <SEO
        title="Online Biomedical Technology School Careers Page"
        description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
        keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
      />
      {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
      <JobsCarousel jobs={jobs} bgImages={carouselBgImages} />
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <section id="hot-jobs">
              <h1 className="text-uppercase mb-5">Hot Jobs</h1>
              {jobs.map(job => (
                <JobDetail key={job.id} job={job} />
              ))}
            </section>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <aside>
              <section id="events">
                <h2>Events</h2>
                <hr />
                {events.map(event => (
                  <div key={event.id}>
                    <Badge variant="primary" style={{ height: "20px" }}>
                      {event.startDate}
                    </Badge>{" "}
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex" }}
                    >
                      <p className="mt-0 mb-2">
                        {event.name} @ {event.location}
                      </p>
                    </a>
                  </div>
                ))}
              </section>
              <section id="blog" className="mt-5">
                <h2>Latest Posts</h2>
                <hr />
                <p>Blog Posts go here</p>
              </section>
            </aside>
          </Col>
        </Row>
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
      </Container>
    </Layout>
  )
}
