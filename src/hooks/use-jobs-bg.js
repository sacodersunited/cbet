import { graphql, useStaticQuery } from "gatsby"

const UseJobsBGImages = () => {
  const data = useStaticQuery(graphql`
    query CareersCarouselImages {
      allJobsBgYaml {
        nodes {
          id
          name
          img {
            childImageSharp {
              fluid(maxWidth: 1440, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return data.allJobsBgYaml.nodes.map(image => ({
    id: image.id,
    name: image.name,
    image: image.img,
  }))
}

export default UseJobsBGImages
