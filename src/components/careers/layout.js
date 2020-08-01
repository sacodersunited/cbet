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
import externshipDoc from "../../documents/Externship Document_July 2020.pdf"

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
            src="https://i.picsum.photos/id/1067/1440/300.jpg"
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
                <blockquote>
                  <p>
                    <i>
                      “The healthcare technology management industry is facing a
                      human resources crisis. Statistics show that 60% of the
                      current workforce is over 52 years of age. At the same
                      time, we are watching HTM educational programs close their
                      doors. The need for skilled talent is being felt
                      everywhere.”
                    </i>
                  </p>
                </blockquote>
                <h2>
                  Association for the Advancement of Medical Instrumentation
                </h2>
                <p>
                  The mission of the College of Biomedical Equipment Technology
                  is to reverse this trend by providing Healthcare Technology
                  Management (HTM) education, training, and career services
                  consistent with the evolving needs of employers in the
                  healthcare industry. Critical to the success of our 100%
                  Online education program is the willingness of our industry
                  partners to support our work by providing “on-the-job
                  training” through externships and other OJT training
                  opportunities.
                </p>
                <p>
                  Students participating in CBET sponsored externships earn
                  college credit toward their AAS degree and gain access to
                  seasoned professionals and mentors. Externships bridge the gap
                  between the formal education students receive Online and the
                  hands-on training and skills validation necessary to succeed
                  as a Biomedical Equipment Technician in an increasingly
                  technical vocation.{" "}
                </p>
                <p>
                  Employers serving as OJT providers promote the healthcare
                  industry by supporting the training, mentorship, and
                  development of the next generation of HTM professionals. By
                  supporting educational programs such as ours, employers gain
                  access to qualified candidates and participate in
                  standardizing best practices and procedures aimed at
                  cross-training and developing the future healthcare workforce.{" "}
                </p>
                <p>
                  To learn more about becoming an externship provider and to
                  gain access to our valuable student candidates contact Manuel
                  Ortega at{" "}
                  <a href="mailto:mortega@cbet.edu">mortega@cbet.edu</a> or
                  Scott McKnight at{" "}
                  <a href="mailto:smcknight@cbet.edu">smcknight@cbet.edu</a>
                </p>
                <a href="mailto:mortega@cbet.edu?&bcc=smcknight@cbet.edu">
                  <Button className="text-uppercase">Sign Up</Button>
                </a>
                <a href={externshipDoc}>
                  <Button
                    className="text-uppercase"
                    variant="outline-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    Info Paper
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
