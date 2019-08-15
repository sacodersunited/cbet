import React from "react"
// import { handleAuthentication } from "../utils/auth"
import Spinner from "react-bootstrap/Spinner"

const Callback = () => {
  // handleAuthentication()

  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export default Callback
