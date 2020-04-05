import { graphql, useStaticQuery } from "gatsby"

const UseJobs = () => {
  const data = useStaticQuery(graphql`
    query jobsQuery {
      allJobsYaml {
        nodes {
          id
          name
          isFeatured
          description
          link
          img {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          status
          startDate(formatString: "MMM DD")
          endDate(formatString: "MMM DD")
        }
      }
    }
  `)

  return data.allJobsYaml.nodes.map(job => ({
    id: job.id,
    name: job.name,
    isFeatured: job.isFeatured,
    description: job.description,
    link: job.link,
    image: job.img,
    type: job.type,
    status: job.status,
    startDate: job.startDate,
    endDate: job.endDate,
  }))
}

export default UseJobs
