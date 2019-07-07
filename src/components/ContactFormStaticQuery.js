import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ContactForm from "./ContactForm"

const ContactFormStaticQuery = props => (
  <StaticQuery
    query={graphql`
      query GMapsQuery {
        site {
          siteMetadata {
            gmap
          }
        }
      }
    `}
    render={data => <ContactForm mapkey={data.site.siteMetadata.gmap} />}
  />
)
export default ContactFormStaticQuery
