import React, { useEffect, useState } from "react"
// import Slide from "react-reveal/Slide"
import Layout from "../components/careers/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import useJobs from "../hooks/use-jobs"
import useJobsBG from "../hooks/use-jobs-bg"
import useEvents from "../hooks/use-events"
import useCbetAuth from "../hooks/use-cbet-auth"
import JobsCarousel from "../components/careers/JobsCarousel.js"
import JobDetail from "../components/careers/JobDetail"
import { Container, Col, Row, Button, Image, Badge } from "react-bootstrap"

export default function Careers() {
  const jobs = useJobs()
  const carouselBgImages = useJobsBG()
  const authContent = useCbetAuth()
  const events = useEvents()

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
      <SEO
        title="Online Biomedical Technology School Careers Page"
        description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
        keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
      />
      {/* {<pre>{JSON.stringify(blogPosts, null, 2)}</pre>} */}
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
      </Container>
    </Layout>
  )
}
