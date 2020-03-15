import { graphql, useStaticQuery } from "gatsby"

const UseTestimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allTestimonialsYaml {
        nodes {
          id
          name
          state
          date
          comment
          type
          image {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `)

  return data.allTestimonialsYaml.nodes.map(testimonial => ({
    id: testimonial.id,
    name: testimonial.name,
    state: testimonial.state,
    date: testimonial.date,
    comment: testimonial.comment,
    type: testimonial.type,
    image: testimonial.image,
  }))
}

export default UseTestimonials
