import React from "react"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Button, Jumbotron } from "react-bootstrap"
import { Link } from "gatsby"
import { signInAuthProvider } from "../components/authProvider"

export default function CbetAdmin() {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <Layout>
                <SEO title="Admin" />
                <Container>
                  <div className="d-flex justify-content-between pt-3 pb-3">
                    <h2>CBET Administration</h2>
                    <p>
                      <span>
                        Welcome,{" "}
                        <span className="font-italic">
                          {accountInfo.account.name}
                        </span>
                        !
                      </span>
                      <Button
                        style={{ marginLeft: "5px" }}
                        onClick={logout}
                        variant="link"
                      >
                        Logout
                      </Button>
                    </p>
                  </div>

                  <Jumbotron>
                    <h1>Admin Dashboard</h1>
                    <p>
                      Perform all administration functions for the CBET website.
                    </p>
                    <Link to="/admin">
                      <Button variant="primary">Go Now</Button>
                    </Link>
                  </Jumbotron>
                </Container>
              </Layout>
            )
          case AuthenticationState.Unauthenticated:
            return (
              <div>
                {error && (
                  <p>
                    <span>
                      An error occurred during authentication, please try again!
                    </span>
                  </p>
                )}
                <p>
                  <span>Please Login to continue.</span>
                  <Button onClick={login}>Login</Button>
                </p>
              </div>
            )
          case AuthenticationState.InProgress:
            return <p>Authenticating...</p>
          default:
            return null
        }
      }}
    </AzureAD>
  )
}
