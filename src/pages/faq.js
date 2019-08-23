import React from "react"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Fade from "react-reveal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import ContactBG from "../images/logo-header2.jpg"
import styled from "styled-components"

const FaqContainer = styled.div`
  background-color: #f8f9fa;
`

const Faq = () => (
  <Layout>
    <SEO title="Faq" />
    <GraphicHeader imgSrc={ContactBG} />

    <FaqContainer>
      <div className="container">
        <Fade left>
          <h1 className="pt-5 pb-5">Frequently Asked Questions</h1>
        </Fade>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={3}>
              <ListGroup style={{ overflowY: "scroll", height: "45vh" }}>
                <ListGroup.Item action href="#link1">
                  Are the Certificate and Associate Degree Programs 100% online?
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  How long does it take to complete the BMET Certificate
                  training?
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  How long does it take to complete the Associate Degree?
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Are my credits transferable?
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                  Does the College offer career services and job placement
                  support?
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={6}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <p>
                    Yes, both programs are 100% online, allowing students the
                    opportunity to engage in learning on a schedule that meets
                    their specific needs.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <p>
                    The certificate training can be completed in approximately
                    25 weeks.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <p>
                    The Associate Degree can be completed in approximately 15
                    months.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <p>
                    Yes, the BMET degree program is fully accredited and credits
                    earned are transferable.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                  <p>
                    Yes, we have a dedicated offering career services,
                    professional job placement support, and other forms
                    assistance designed to ensure you earn the opportunity to
                    pursue the career you seek.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </FaqContainer>
  </Layout>
)

export default Faq
