import React, { Component } from "react"
import SEO from "../components/seo"
import ListGroup from "react-bootstrap/ListGroup"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import { navigate } from "gatsby"
import config from "../components/Config"
import { getUserDetails } from "../components/GraphService"
import { UserAgentApplication } from "msal"

class CbetAdmin extends Component {
  constructor(props) {
    super(props)

    this.userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
      },
    })

    var user = this.userAgentApplication.getAccount()

    this.state = {
      isAuthenticated: user !== null,
      user: {},
      error: null,
    }

    if (user) {
      // Enhance user object with data from Graph
      this.getUserProfile()
    }
  }

  async login() {
    try {
      await this.userAgentApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      })
      await this.getUserProfile()
    } catch (err) {
      var error = {}

      if (typeof err === "string") {
        var errParts = err.split("|")
        error =
          errParts.length > 1
            ? { message: errParts[1], debug: errParts[0] }
            : { message: err }
      } else {
        error = {
          message: err.message,
          debug: JSON.stringify(err),
        }
      }

      this.setState({
        isAuthenticated: false,
        user: {},
        error: error,
      })
    }
  }

  logout() {
    this.userAgentApplication.logout()
  }

  async getUserProfile() {
    try {
      // Get the access token silently
      // If the cache contains a non-expired token, this function
      // will just return the cached token. Otherwise, it will
      // make a request to the Azure OAuth endpoint to get a token

      var accessToken = await this.userAgentApplication.acquireTokenSilent({
        scopes: config.scopes,
      })

      if (accessToken) {
        // Get the user's profile from Graph
        var user = await getUserDetails(accessToken)
        this.setState({
          isAuthenticated: true,
          user: {
            displayName: user.displayName,
            email: user.mail || user.userPrincipalName,
          },
          error: null,
        })
      }
    } catch (err) {
      var error = {}
      if (typeof err === "string") {
        var errParts = err.split("|")
        error =
          errParts.length > 1
            ? { message: errParts[1], debug: errParts[0] }
            : { message: err }
      } else {
        error = {
          message: err.message,
          debug: JSON.stringify(err),
        }
      }

      this.setState({
        isAuthenticated: false,
        user: {},
        error: error,
      })
    }
  }

  render() {
    console.log("cbet admin fired")
    return (
      <Layout>
        <button onClick={this.login.bind(this)}>Login</button>
        {/* <Welcome
          {...props}
          isAuthenticated={this.state.isAuthenticated}
          user={this.state.user}
          authButtonMethod={this.login.bind(this)}
        /> */}
        <SEO title="Admin" />
        <Container>
          <h2 className="pt-5 pb-5">Cbet Administration</h2>
          <ListGroup style={{ height: "45vh" }}>
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
    )
  }
}

export default CbetAdmin
