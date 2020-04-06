import { graphql, useStaticQuery } from "gatsby"

const UseCbetAuth = () => {
  const data = useStaticQuery(graphql`
    query cbetAuth {
      site {
        siteMetadata {
          getCbetContentCode
        }
      }
    }
  `)

  return data.cbetAuth.site.siteMetadata.getCbetContentCode
}

export default UseCbetAuth
