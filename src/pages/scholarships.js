import React from "react"
import docScholarships from "../documents/CBET_Insert_BG_20.pdf"

const Scholarships = () => {
  let a = document.createElement("a")
  //   console.log("doc schol", docScholarships)
  a.href = docScholarships
  a.download = "scholarships"
  a.click()

  return (
    <React.Fragment>
      <a href={docScholarships} download>
        download Scholarships
      </a>
    </React.Fragment>
  )
}

export default Scholarships
