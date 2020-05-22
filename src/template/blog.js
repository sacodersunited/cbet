import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { FaClock } from "react-icons/fa"
import Layout from "../components/careers/layout"
import useCbetAuth from "../hooks/use-cbet-auth"
import Moment from "react-moment"
import SEO from "../components/seo"

//eslint-disable-next-line
export default ({ data }) => {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    // get data from GitHub api
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setCbetContent(resultData)
      })
  }, [])

  const events = cbetContent.filter(
    (content) => content.CategoryName === "Event" && content.Status === true
  )

  return (
    <Layout cbetContent={cbetContent} events={events} noCarousel>
      <SEO
        title="Biomedical Training Certification Online Blog"
        description="Are you
looking to get your BMET certificate? College of Biomedical Equipment Technology is
the place for you. Visit our website to learn more!"
      />
      <h1>{data.cbetContent.Title}</h1>
      <section className="post-meta">
        <p>
          by {data.cbetContent.Author} posted on:{" "}
          <Moment format="MMM DD, YYYY">{data.cbetContent.StartDate}</Moment>{" "}
          <FaClock />{" "}
          <Moment fromNow="MMM DD, YYYY">{data.cbetContent.StartDate}</Moment>
        </p>
      </section>
      <main
        dangerouslySetInnerHTML={{ __html: data.cbetContent.Description }}
      />
    </Layout>
  )
}
export const query = graphql`
  query CbetBlogs($id: Int) {
    cbetContent(Id: { eq: $id }) {
      Id
      Title
      Author
      CategoryName
      Category
      CreatedBy
      CreatedDate
      ModifyBy
      ModifyDate
      PartnerName
      StartDate
      EndDate
      Status
      Tags
      Thumbnail
      Description
      Location
      Featured
      Link
    }
  }
`
