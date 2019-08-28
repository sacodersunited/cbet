import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import GraphicHeader from "../components/graphicHeader"
import LayoutDetail from "../components/layout"
import headerImg from "../images/career-bg.jpg"
import CareerPic from "../images/externship-1.jpg"
import CareerPicTwo from "../images/externship-2.jpg"

const CareerServices = () => (
  <LayoutDetail>
    <SEO title="Career Services" />
    <GraphicHeader imgSrc={headerImg} title="Careers" />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">Career Services</h2>
          </Fade>

          <p>
            College of Biomedical Equipment Technology assists students in
            finding employment after training. Although the school cannot
            guarantee employment, we will help students to secure jobs through a
            variety of means, including job searches and available job postings,
            resume writing assistance and training in interviewing techniques.
            Graduates are eligible to access the school’s placement assistance
            program at no additional cost.
          </p>
          <Image className="mb-3" src={CareerPic} rounded />
          <h3>Confidence For Your Next Step</h3>
          <p>
            Graduates of College of Biomedical Equipment Technology are well
            prepared for the job interview and well prepared to begin their new
            career with confidence.
          </p>
          <a href="mailto:admissiondept@cbet.edu">
            <Button>Contact Us</Button>
          </a>
          <h3>Externships</h3>
          <p>
            Externships offer students a way to earn practical experience in
            their program field and often lead to employment with the company
            they are working with. Each program has an Externship seminar to
            prepare and explore the different options. CBET has several
            nationwide originations that have partnered with us to give our
            students externship options in an area close by. The Program
            Director continues to explore new opportunities for our students to
            achieve hands-on training with their program through externships
            with current employers around the nation.
          </p>
          <Image className="mb-3" src={CareerPicTwo} rounded />
          <h3>Stephens International</h3>
          <p>
            Stephens International Recruiting, Inc. provides the competitive
            edge and resources to assist you in your career search. Candidate
            qualifications, career objectives, and location preferences are
            priorities when we match you with an employer’s requirements.
          </p>
          <p>
            We are associated with Top Echelon Network, giving us access to
            additional job openings to assist candidates seeking new
            opportunities. This includes opportunities for candidates outside of
            our expertise and client base.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bmets-usa.com/"
          >
            <Button>Learn More</Button>
          </a>
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default CareerServices
