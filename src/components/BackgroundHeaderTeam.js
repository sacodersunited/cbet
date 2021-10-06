import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import Fade from "react-reveal/Fade"

const ValuesBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  background-image: url(${(props) => props.imgsrc || null});
  background-size: cover;
  color: whitesmoke;
`

const BackgroundHeaderTeam = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "blue-med-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <ValuesBG>
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
            title="cbet_values"
            id="cbet_values"
            role="img"
            aria-label="cbet_values"
          >
            <Container className="pt-5 pb-5">
              <Row className="mb-3">
                <Col md={7}>
                  <Fade left>
                    <h2 className="display-5 text-uppercase">Values</h2>
                    <p className="lead">
                      Our core values guide us to accomplish our mission and
                      achieve our vision.
                    </p>
                  </Fade>
                  <h5>
                    1. Committed to Delivering the Highest Quality Education
                  </h5>
                  <p>
                    We are committed to providing exceptional education,
                    training, and career services in an online format,
                    emphasizing applied instruction focused on both general and
                    advanced biomedical equipment, led by skilled faculty with
                    real-world experience.
                  </p>
                  <h5>
                    2. Committed to Lifelong Learning and the Professional
                    Development of our Students
                  </h5>
                  <p>
                    Our commitment to our students extends beyond the limits of
                    the classroom. Through continuing careers services,
                    mentorship, and support, we foster lifelong learning and
                    professional development designed to strengthen the
                    relationship we share with our students, alumni and partners
                    in the healthcare industry.
                  </p>
                  <h5>3. Committed to our Strategic Partners</h5>
                  <p>
                    We partner with business and industry to keep pace and
                    better understand global healthcare technology and cyber
                    security trends. Through our strategic alliances we ensure
                    our curriculum and instruction prepare our graduates to
                    compete successfully in a rapidly evolving and increasingly
                    technical healthcare environment.
                  </p>
                  <h5>4. Committed to Community</h5>
                  <p>
                    We believe in fostering a learning community in which the
                    values, goals, and learning styles of students are
                    recognized and supported. We are committed to the belief
                    that diversity strengthens learning and actively seek
                    opportunities to leverage the experiences, perspectives, and
                    ideas of our students.
                  </p>
                  <h5>5. Committed to Integrity and Excellence in Education</h5>
                  <p>
                    We believe in the importance of maintaining the highest
                    ethical standards and integrity in all that we do. We also
                    expect the same in our students an incorporate professional
                    business ethics and communications in our courses of
                    instruction. At the College of Biomedical Equipment
                    Technology, our word is our bond.
                  </p>
                  <h5>6. Committed to Quality Benchmarks</h5>
                  <p>
                  CBET utilizes the Principles of Ethics for ACCET Accredited Institutions as a baseline from which to measure our commitment to providing and/or ensuring: high quality and effective programs; non-discriminatory practices in our employment and enrollment practices; ethical and clearly stated advertising, admission, and enrollment procedures; effective student services to ensure the successful retention, graduation, and employability of students and graduates; student satisfaction; the ethical administration of all financial aspects of our institution; voluntary self-regulation and self-improvement; our commitment to community and industry involvement and participation; the provision of essential skills to support a productive workforce in our fields; and the promotion of continuing education and training programs of the highest quality and integrity. 
                  </p>
                </Col>
              </Row>
            </Container>
          </BackgroundImage>
        </ValuesBG>
      )
    }}
  />
)

export default BackgroundHeaderTeam
