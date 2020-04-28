import React, { Component } from "react"
import AzureAD from "react-aad-msal";
import SEO from "../components/seo"
import ListGroup from "react-bootstrap/ListGroup"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import { navigate } from "gatsby"
import { signInAuthProvider } from "../components/authProvider";

class CbetAdmin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: null,
      user: {},
      error: null,
    }

  }

  render() {
    return (
      <AzureAD provider={signInAuthProvider} forceLogin={true}>
        <Layout>
          <SEO title="Admin" />
          <Container>
            <h2 className="pt-5 pb-5">Cbet Administration</h2>
            <ListGroup style={{ height: "45vh" }}>
              <ListGroup.Item
                variant="primary"
                >Login to CBET Admin</ListGroup.Item>
              <ListGroup.Item
                variant="primary"
                action
                onClick={() => navigate("/schedule/")}
              >
                Class Scheduler
              </ListGroup.Item>
              <ListGroup.Item action variant="secondary">
                Next Feature (Coming soon)
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Layout>
      </AzureAD>
    )
  }
}

export default CbetAdmin
