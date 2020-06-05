import React, { useEffect, useState } from "react"
// import Slide from "react-reveal/Slide"
import { FaFrown } from "react-icons/fa"
import Layout from "../components/careers/layout"
import SEO from "../components/seo"
import JobDetail from "../components/careers/JobDetail"
import useCbetAuth from "../hooks/use-cbet-auth"
import { formatDate } from "../utils/utility"

export default function Careers() {
  const today = new Date()
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    // get data from GitHub api
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [])

  const jobs = cbetContent.filter(content => {
    const newEndDate = new Date(formatDate(content.EndDate, true))
    if (
      today < newEndDate &&
      content.Category === 1 &&
      content.Status === true
    ) {
      return content
    }

    return null
  })

  return (
    <Layout cbetContent={cbetContent}>
      <SEO
        title="Online Biomedical Technology School Careers Page"
        description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
        keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
      />
      <section id="hot-jobs">
        <h1 className="text-uppercase mb-5">Hot Jobs</h1>
        {jobs.length > 0 ? (
          jobs.map(job => <JobDetail key={job.Id} job={job} />)
        ) : (
          <p>
            <FaFrown color="goldenrod" /> Sorry no jobs. Please check back soon.
          </p>
        )}
      </section>
    </Layout>
  )
}
