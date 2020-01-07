import React from "react"
import hollisMerit from "../documents/Hollis Merit Scholarship_AAS and CERT.pdf"
import bassukScholarship from "../documents/First Sergeant Warren Bassuk Memorial Scholarship_AAS and CERT.pdf"

// https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36
const Scholarships = () => {
  return (
    <React.Fragment>
      <a href={hollisMerit} download>
        Download Hollis Merit Scholarship
      </a>
      <a href={bassukScholarship} download>
        Download First Sergeant Warren Bassuk Memorial Scholarship_AAS and CERT
      </a>
    </React.Fragment>
  )
}

export default Scholarships
