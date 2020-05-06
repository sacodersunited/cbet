import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import { signInAuthProvider } from "./../authProvider"
import AuthenticatedLayout from "./AuthenticatedLayout"

import useCbetAuth from "../../hooks/use-cbet-auth"

export default function Layout({ title, children, user }) {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    // get data from GitHub api
    fetch(
      `https://cbetcontent.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [authContent])

  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        console.log("acct", accountInfo.account.name)
        console.log("cbet Content is" + cbetContent)
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <AuthenticatedLayout
                cbetContent={cbetContent}
                signedInUser={accountInfo.account.name}
                title={title}
                children={children}
              />
            )
          case AuthenticationState.Unauthenticated:
            // TODO: ADD Cbet Styles for unauthenticated
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
            // TODO: ADD Cbet Styles for unauthenticating
            return <p>Authenticating...</p>
          default:
            return null
        }
      }}
    </AzureAD>
  )
}
