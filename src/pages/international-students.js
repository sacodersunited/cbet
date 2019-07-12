import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import GraphicHeader from "../components/graphicHeader"
import LayoutDetail from "../components/layout"
import SEO from "../components/seo"
import headerImg from "../images/intl-students-bg.jpg"
import soldierBG from "../images/soldier-bg.png"

const BlueBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  padding: 96px 0;
`

const SoldierSection = styled.section`
  background-image: url(${props => props.imgBG || null});
  background-size: cover;
  min-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 96px 0;
`

const InternationalStudents = () => (
  <LayoutDetail>
    <SEO title="International Students" />
    <GraphicHeader imgSrc={headerImg} title="International Students" />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">
              International Student Policies
            </h2>
            <h3>American-Earned Credits </h3>
            <p>
              International students with college-level learning assessed from
              another country must complete at least 30 additional U.S. college
              credits and meet all the area of study or concentration degree
              requirements to obtain a College of Biomedical Equipment
              Technology (CBET) associate degree. CBET does not accept
              international trade school or other forms of certification as
              transfer credit to certificate or degree producing programs. All
              other conditions that apply to local students will apply to
              international students as well.
            </p>
            <h3>Eligibility</h3>
            <p>
              Foreign citizens are defined as those who live and have
              citizenship in countries where English is not the native language.
              Foreign applicants interested in becoming undergraduate students
              will be eligible for enrollment if they can provide scores from
              either the TOEFL (Test of English as a Foreign Language) or IELTS
              (International English Language Testing System); and achieve a
              score of 17 or greater on the Wonderlic English aptitude test.
            </p>
            <p>
              At minimum, TOEFL scores should be 500 on the paper examination,
              173 on the computer-based or 79 on the Internet-based test. At
              minimum, the IELTS score should be 6.5. Students are responsible
              for taking either the TOEFL or IELTS and having the official
              scores sent to CBET at 11550 IH-10 West, Suite 190, San Antonio,
              Texas 78230
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default InternationalStudents
