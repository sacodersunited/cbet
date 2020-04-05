import React from "react"
import Slide from "react-reveal/Slide"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useJobs from "../hooks/use-jobs"
import useJobsBG from "../hooks/use-jobs-bg"
import JobsCarousel from "../components/careers/JobsCarousel.js"

export default function Careers() {
  const jobs = useJobs()
  const carouselBgImages = useJobsBG()
  return (
    <Layout>
      <SEO
        title="Online Biomedical Technology School Careers Page"
        description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
        keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
      />
      {/* <pre>{JSON.stringify(carouselBgImages, null, 2)}</pre> */}
      <JobsCarousel jobs={jobs} bgImages={carouselBgImages} />
    </Layout>
  )
}
