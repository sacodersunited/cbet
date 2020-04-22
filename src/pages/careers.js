import React from "react"
// import Slide from "react-reveal/Slide"
import Layout from "../components/careers/layout"
import SEO from "../components/seo"
import useJobs from "../hooks/use-jobs"
import JobDetail from "../components/careers/JobDetail"

export default function Careers() {
  const jobs = useJobs()

  return (
    <Layout>
      <SEO
        title="Online Biomedical Technology School Careers Page"
        description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
        keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
      />
      {/* {<pre>{JSON.stringify(blogPosts, null, 2)}</pre>} */}
      <section id="hot-jobs">
        <h1 className="text-uppercase mb-5">Hot Jobs</h1>
        {jobs.map(job => (
          <JobDetail key={job.id} job={job} />
        ))}
      </section>
    </Layout>
  )
}
