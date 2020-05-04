import React from "react"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import { Button } from "react-bootstrap"
import { signInAuthProvider } from "../components/authProvider"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

const AdminCreate = () => {
  const user = null
  console.log("user", user)
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <Layout title="Create/Edit">
                <SEO title="Admin Create Edit" />
                <p>edit the this page from </p>
                <pre className="p-3 mb-2 bg-dark text-white">
                  /src/pages/admin-create
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

export default AdminCreate
