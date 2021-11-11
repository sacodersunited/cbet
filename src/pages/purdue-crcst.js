import React from "react"
import { Container, Row, Col, Alert } from "react-bootstrap"
import Layout from "../components/layout"

const PurdueCrcst = (props) => {
  return (
    <Layout>
      <br></br>
      <br></br>
      <br></br>
      <Alert variant="danger" dismissible>
        <div className="container">
          <Alert.Heading>
            Special Notice Concerning the Global COVID-19 Pandemic
          </Alert.Heading>
            Due to the impact of COVID-19, we have temporarily suspended our CRCST Externship Program. Please contact a Purdue Global advisor for additional information and support.
        </div>
      </Alert>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
  )
  }

  export default PurdueCrcst