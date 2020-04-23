import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../layout"
import { Container, Col, Row, Button, Image, Badge } from "react-bootstrap"
import JobsCarousel from "./JobsCarousel"
import useJobs from "../../hooks/use-jobs"
import useEvents from "../../hooks/use-events"
import useJobsBG from "../../hooks/use-jobs-bg"
import useCbetAuth from "../../hooks/use-cbet-auth"

export default function CareersLayout({ children, noCarousel }) {
  const jobs = useJobs()
  const carouselBgImages = useJobsBG()
  const events = useEvents()
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    // get data from GitHub api
    fetch(
      `https://cbetcontent.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      }) // set data for the number of stars
  }, [authContent])

  const blogPosts = cbetContent.filter(
    content => content.CategoryName === "Blog" && content.Status === true
  )

  function createMarkup(html) {
    return { __html: html }
  }

  return (
    <Layout>
      <>
        {!noCarousel ? (
          <JobsCarousel jobs={jobs} bgImages={carouselBgImages} />
        ) : (
          <img
            src="https://i.picsum.photos/id/1067/1440/300.jpg"
            alt="nature"
            css={css`
              object-fit: cover;
              width: 100%;
            `}
          />
        )}

        <Container className="mt-5">
          <Row>
            <Col md={6}>{children}</Col>
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
                  {blogPosts.length > 0
                    ? blogPosts.map(post => (
                        <div key={post.Id}>
                          <Link to="/blog">
                            <h4>{post.Title}</h4>
                          </Link>
                          <p
                            dangerouslySetInnerHTML={createMarkup(
                              post.Description.slice(0, 140) + "..."
                            )}
                          />
                        </div>
                      ))
                    : null}
                </section>
              </aside>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <section id="externship">
                <h1 className="text-uppercase">Externships </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem ea numquam iste, vitae dignissimos officia
                  velit. Magnam, eveniet, sapiente commodi laudantium eum soluta
                  itaque totam optio eligendi delectus unde!
                </p>
                <Button className="text-uppercase">Sign Up</Button>{" "}
                <Button className="text-uppercase" variant="outline-primary">
                  Info Paper
                </Button>
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
      </>
    </Layout>
  )
}

// TODO: Add proptyptes
