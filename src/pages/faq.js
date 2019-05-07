import React from "react"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Fade from "react-reveal"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Faq = () => (
  <Layout>
    <SEO title="Faq" />
    <div style={{ paddingLeft: "250px", marginTop: "50px" }}>
      <Fade left>
        <h1 style={{ marginBottom: "15px" }}>
          FAQ - Frequently Asked Questions
        </h1>
      </Fade>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3}>
            <ListGroup style={{ overflowY: "scroll", height: "45vh" }}>
              <ListGroup.Item action href="#link1">
                What does Accet mean?
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                What is Bill Bassuk's passion?
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                What happens regularly that would horrify a person from 100
                years ago?
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                What is the best restaurant in your area?
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Where do you usually go when you when you have time off?
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                What is the biggest threat to the social contract in our
                country?
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                When was the last time you remember someone doing or saying
                something so stupid that you were sure it was a joke?
              </ListGroup.Item>
              <ListGroup.Item action href="#link8">
                Does jealously have value in driving humans to improve
                themselves or is it a purely negative emotion?
              </ListGroup.Item>
              <ListGroup.Item action href="#link9">
                What is a question really?
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <p>
                  Accrediting Council for Continuing Education & Training
                  (ACCET), a national accrediting agency listed by the U.S.
                  Department of Education. CIT is also Approved and Regulated by
                  the Texas Workforce Commission, Career Schools and Colleges,
                  Austin, Texas.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <p>To Learn classic rock songs on the Eukele!!!</p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <p>
                  League quarter driver hail-shot matey Shiver me timbers crimp
                  blow the man down plunder jib. Bilge rat transom lad no prey,
                  no pay scuppers scourge of the seven seas rum scurvy schooner
                  bilge water. Tack crow's nest jury mast strike colors hulk
                  spike piracy measured fer yer chains stern lass. Lateen sail
                  marooned Pieces of Eight fluke Gold Road Sail ho schooner
                  measured fer yer chains gangplank keel. Line swing the lead
                  draft booty marooned furl quarterdeck Privateer take a caulk
                  carouser. Yellow Jack coxswain furl topgallant Sink me cable
                  topmast tender measured fer yer chains lanyard. Hempen halter
                  man-of-war crack Jennys tea cup Arr port skysail belay Yellow
                  Jack list Blimey. Weigh anchor rope's end grapple topgallant
                  crow's nest main sheet stern lugger starboard hornswaggle. Me
                  barque run a shot across the bow hornswaggle Sink me clap of
                  thunder heave to hands tack boatswain.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <p>
                  My first draft of my vows, that I wrote the day after we got
                  engaged clocked in around 70 pages.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <p>
                  Fishing is for sport only. Fish meat is practically a
                  vegetable.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <p>
                  I'd invite you for a drink, but where would we find one here?
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <p>
                  The less I know about other people’s affairs, the happier I
                  am. I’m not interested in caring about people. I once worked
                  with a guy for three years and never learned his name. Best
                  friend I ever had. We still never talk sometimes.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link8">
                <p>
                  There’s only one thing I hate more than lying... skim milk.
                  Which is water that’s lying about being milk.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link9">
                <p>
                  We have to remeber what's important in life: friends waffles
                  and work. Or waffles, friends, work.{" "}
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  </Layout>
)

export default Faq
