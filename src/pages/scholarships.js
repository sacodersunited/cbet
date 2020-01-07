import React from "react"
import { document } from "browser-monads"
import hollisMerit from "../documents/Hollis Merit Scholarship_AAS and CERT.pdf"

// https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36
const Scholarships = () => {
  let a = document.createElement("a")
  a.href = hollisMerit
  a.download = "scholarships"
  a.click()

  return (
    <React.Fragment>
      <a href={hollisMerit} download>
        Download Hollis Merit Scholarship
      </a>
    </React.Fragment>
  )
}

export default Scholarships
