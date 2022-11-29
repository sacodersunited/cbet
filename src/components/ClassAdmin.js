import React from "react"
import { isEmpty } from "../utils/utility"
import { Form, Container, Card, Row, Col, Spinner } from "react-bootstrap"
import { FaCloudversify, FaRegCalendarAlt } from "react-icons/fa"
import Img from "gatsby-image"
import Moment from "react-moment"

class ClassAdmin extends React.Component {
  constructor(props) {
    super(props)

    const newCbetClassesStaticQuery = props.cbetClasses.map((cbet) => {
      return cbet.node
    })

    this.state = {
      classes: newCbetClassesStaticQuery, // main classes pulled in from azure db
    }
  }

  render() {
    if (this.state.classes.length === 0) {
      return (
        <div style={{ padding: "10px" }}>
          <Spinner animation="border" variant="primary" />
          <h4 style={{ display: "inline", marginLeft: "5px" }}>Loading...</h4>
        </div>
      )
    }

    return (
      <Container>
        <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>
          UPCOMING CLASSES
        </h1>

        <Row>
          {this.state.classes.map((cbetClass, index) => {
            if (cbetClass.IsActive || isEmpty(this.props.user) === false) {
              return (
                <Col md={6} key={cbetClass.id + index}>
                  <Card
                    border={cbetClass.IsActive ? "primary" : "light"}
                    bg={cbetClass.IsActive === false ? "secondary" : ""}
                    text={cbetClass.IsActive === false ? "dark" : ""}
                    style={{
                      borderStyle: "solid",
                      borderWidth: "thin",
                      padding: "4px",
                      minHeight: "715px",
                    }}
                    key={cbetClass.Id}
                    className="mb-5"
                  >
                    {/* render app image for selector */}
                    {(() => {
                      switch (cbetClass.ProgramSelected) {
                        case "BMET":
                          return (
                            <Img
                              fluid={
                                this.props.images.bmetdegree.childImageSharp
                                  .fluid
                              }
                              className="rounded"
                              style={{ minHeight: "207px", height: "207px" }}
                            />
                          )
                        case "Cert":
                          return (
                            <Img
                              fluid={
                                this.props.images.bmettech.childImageSharp.fluid
                              }
                              className="rounded"
                              style={{ minHeight: "207px", height: "207px" }}
                            />
                          )

                        default:
                          return (
                            <Img
                              fluid={
                                this.props.images.bmetdegree.childImageSharp
                                  .fluid
                              }
                              className="rounded"
                              style={{ minHeight: "207px", height: "207px" }}
                            />
                          )
                      }
                    })()}

                    <Card.Body
                      style={{
                        maxHeight: "130px",
                      }}
                    >
                      <Card.Title
                        className="text-uppercase"
                        style={{
                          textAlign: "center",
                          color: "#2699FB",
                          minHeight: "48px",
                        }}
                      >
                        {cbetClass.Title}
                      </Card.Title>
                      <Card.Text
                        style={{ color: "#2699FB", textAlign: "center" }}
                      >
                        <FaRegCalendarAlt
                          size={24}
                          style={{
                            marginRight: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        <Moment format="MMM DD YYYY">
                          {cbetClass.StartDate}
                        </Moment>
                        {" - "}
                        <Moment format="MMM DD YYYY">
                          {cbetClass.EndDate}
                        </Moment>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ background: "#004085" }}>
                      <Card.Text
                        style={{ color: "white", textAlign: "center" }}
                      >
                        Registration Deadline{" "}
                        <Moment format="MMM DD YYYY">
                          {cbetClass.RegistrationCloseDate}
                        </Moment>
                      </Card.Text>
                    </Card.Footer>
                    <Card.Body>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: cbetClass.Format.length > 70 ? "" : "15px",
                        }}
                      >
                        <li style={{ padding: "8px" }}>
                          <Form.Group>
                            <Card.Text style={{ minHeight: "56px" }}>
                              <FaCloudversify
                                size={32}
                                style={{ marginRight: "5px" }}
                              />
                              <strong>Format</strong>: {cbetClass.Format}
                            </Card.Text>
                          </Form.Group>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }

            return null
          })}
        </Row>
      </Container>
    )
  }
}

export default ClassAdmin
