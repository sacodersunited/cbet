import React from "react"
import { AzureAD, AuthenticationState } from "react-aad-msal";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Button, ListGroup, Item } from "react-bootstrap"
import { navigate } from 'gatsby'
import { signInAuthProvider } from "../components/authProvider";

export default function CbetAdmin() {
    return (
      <AzureAD provider={signInAuthProvider} forceLogin={true}>
        {
          ({login, logout, authenticationState, error, accountInfo}) => {
            switch (authenticationState) {
              case AuthenticationState.Authenticated:
                return (
                  <Layout>
                    <SEO title="Admin" />
                    <Container>
                      <h2 className="pt-5 pb-5">Cbet Administration</h2>
                      <p>
                        <span>Welcome, {accountInfo.account.name}!</span>
                        <Button style={{ marginLeft: '5px' }} onClick={logout}>Logout</Button>
                      </p>

                      <ListGroup style={{ height: "45vh" }}>
                        <ListGroup.Item
                          variant="primary"
                          action
                          onClick={() => navigate("/schedule/")}
                        >
                          Dashboard
                        </ListGroup.Item>
                      </ListGroup>
                    </Container>
                  </Layout>
                );
              case AuthenticationState.Unauthenticated:
                return (
                  <div>
                    {error && <p><span>An error occurred during authentication, please try again!</span></p>}
                    <p>
                      <span>Please Login to continue.</span>
                      <Button onClick={login}>Login</Button>
                    </p>
                  </div>
                );
              case AuthenticationState.InProgress:
                return (<p>Authenticating...</p>);
            }
          }
        }
      </AzureAD>
    )
}
