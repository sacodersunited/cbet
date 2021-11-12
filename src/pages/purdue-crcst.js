import React from "react"
import { Modal } from "react-bootstrap"
import Layout from "../components/layout"

const PurdueCrcst = (props) => {
  return (
    <Layout>
      <div style={{ height: '500px'}}>
        <Modal.Dialog
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{ background: '#32679a'}}> 
            <Modal.Title id="contained-modal-title-vcenter">
              Purdue CRCST Message
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>Centered Modal</h4> */}
            <p>
              Due to the impact of COVID-19, we have temporarily suspended our
              CRCST Externship Program. Please contact a Purdue Global advisor
              for additional information and support.
            </p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </Layout>
  )
}

export default PurdueCrcst
