import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../layout"
import { Container, Col, Row, Button, Image, Badge } from "react-bootstrap"
import JobsCarousel from "./JobsCarousel"
import useJobsBG from "../../hooks/use-jobs-bg"
import Moment from "react-moment"
import { FaFrown } from "react-icons/fa"
import { formatDate } from "../../utils/utility"
import ExternshipAgreement from "../../documents/CBET Externship Agreement.pdf"

export default function CareersLayout({
  children,
  noCarousel,
  cbetContent,
  blogHeader,
}) {
  const today = new Date()
  const carouselBgImages = useJobsBG()

  const jobs = cbetContent.filter((content) => {
    const newEndDate = new Date(formatDate(content.EndDate, true))
    if (
      today < newEndDate &&
      content.Category === 1 &&
      content.Status === true
    ) {
      return content
    }

    return null
  })

  const featuredJobs = jobs.filter((job) => job.Featured === true)

  const events = cbetContent
    .filter(
      (content) =>
        content.CategoryName === "Event" &&
        content.Status === true &&
        today < new Date(formatDate(content.EndDate, true))
    )
    .sort(
      (a, b) =>
        new Date(formatDate(a.StartDate, true)) -
        new Date(formatDate(b.StartDate, true))
    )

  const blogPosts = cbetContent.filter(
    (content) => content.CategoryName === "Blog" && content.Status === true
  )

  function createMarkup(html) {
    return { __html: html }
  }

  return (
    <Layout>
      <>
        {!noCarousel && featuredJobs.length > 0 ? (
          <JobsCarousel jobs={featuredJobs} bgImages={carouselBgImages} />
        ) : // default banner image for blog posts
        blogHeader ? (
          <img
            src={blogHeader}
            alt="blog"
            style={{ objectFit: "cover", width: "100%", maxHeight: "300px" }}
          />
        ) : (
          <img
            src="https://picsum.photos/id/1067/1400/300"
            alt="nature"
            style={{ objectFit: "cover", width: "100%" }}
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
                  {events.length > 0 ? (
                    events.map((event) => (
                      <div key={event.Id}>
                        <Badge variant="primary" style={{ height: "20px" }}>
                          <Moment format="MMM DD">{event.StartDate}</Moment>
                        </Badge>{" "}
                        <a
                          href={event.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "inline-flex" }}
                        >
                          <p className="mt-0 mb-2">
                            {event.Title} @ {event.Location}
                          </p>
                        </a>
                      </div>
                    ))
                  ) : (
                    <p>
                      <FaFrown color="goldenrod" /> Sorry no events.
                    </p>
                  )}
                </section>
                <section id="blog" className="mt-5">
                  <h2>Latest Posts</h2>
                  <hr />
                  {blogPosts.length > 0
                    ? blogPosts.map((post) => {
                        return (
                          <div key={post.Id}>
                            <Link
                              to={`/posts/${post.Title.toLowerCase()
                                .replace(/ /g, "-")
                                .replace(/[^\w-]+/g, "")}`}
                            >
                              <h4>{post.Title}</h4>
                            </Link>
                            <p
                              dangerouslySetInnerHTML={createMarkup(
                                post.Description.slice(0, 140).replace(
                                  /<\/?[^>]+(>|$)/g,
                                  ""
                                ) + "..."
                              )}
                            />
                          </div>
                        )
                      })
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
                  The College of Biomedical Equipment Technology partners with
                  leaders in the healthcare industry to develop and deliver
                  supervised, hands-on, training opportunities for students
                  completing the AAS degree program. There are many advantages
                  to providing externship site and supervisory support to
                  biomedical equipment technicians, including gaining access to
                  qualified technicians ready to go to work. To learn more,
                  e-mail the college director at{" "}
                  <a href="mailto:rgonzales@cbet.edu">rgonzales@cbet.edu</a> or
                  call{" "}
                  <a href="tel:+18448799043" rel="nofollow">
                    844-879-9043
                  </a>{" "}
                  .
                </p>
                <p>
                  ___I have attached the externship agreement document for the
                  link.
                </p>
                <a href="mailto:rgonzales@cbet.edu,mortega@cbet.edu">
                  <Button className="text-uppercase">Sign Up</Button>
                </a>
                <a href={ExternshipAgreement}>
                  <Button
                    className="text-uppercase ml-3"
                    variant="outline-primary"
                  >
                    Externship Agreement
                  </Button>
                </a>
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

// TODO: Add propTypes
