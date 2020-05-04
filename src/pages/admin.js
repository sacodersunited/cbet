import React from "react"
import SEO from "../components/seo"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import { signInAuthProvider } from "../components/authProvider"
import { Button } from "react-bootstrap"
import Layout from "../components/admin/layout"

const Admin = () => {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <Layout title="Dashboard" user={accountInfo.account.name}>
                <SEO title="Admin" />
                <p>edit the this page from </p>
                <pre className="p-3 mb-2 bg-dark text-white">
                  /src/pages/admin
                </pre>
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

export default Admin
