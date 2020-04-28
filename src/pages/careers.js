import React, { useEffect, useState } from "react"
// import Slide from "react-reveal/Slide"
import Layout from "../components/careers/layout"
import SEO from "../components/seo"
import JobDetail from "../components/careers/JobDetail"
import useCbetAuth from "../hooks/use-cbet-auth"

export default function Careers() {
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

  const jobs = cbetContent.filter(
    content => content.CategoryName === "Job" && content.Status === true
  )

  return (
    <Layout cbetContent={cbetContent}>
      <SEO
        title="Online Biomedical Technology School Careers Page"
        description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
        keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
      />
      {/* uncomment to debug */}
      {/* {<pre>{JSON.stringify(cbetContent, null, 2)}</pre>} */}
      <section id="hot-jobs">
        <h1 className="text-uppercase mb-5">Hot Jobs</h1>
        {jobs.map(job => (
          <JobDetail key={job.Id} job={job} />
        ))}
      </section>
    </Layout>
  )
}
