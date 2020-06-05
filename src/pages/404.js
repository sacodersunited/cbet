import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Script from "../hooks/use-script"
import { Helmet } from "react-helmet"

export default function NotFoundPage() {
  // const [done, setDone] = useState(false)
  // const loadDynamicScript = (callback) => {
  //   const existingScript = document.getElementById("application-form")

  //   if (!existingScript) {
  //     const script = document.createElement("script")
  //     script.src =
  //       "https://cbet.quickschools.com/sms/es/application?divId=application-form" // URL for the third-party library being loaded.
  //     script.id = "quickschools" // e.g., googleMaps or stripe
  //     document.body.appendChild(script)

  //     script.onload = () => {
  //       if (callback) callback()
  //     }
  //   }

  //   if (existingScript && callback) callback()
  // }
  // useEffect(() => {
  //   loadDynamicScript(() => setDone(true))
  // }, [])

  return (
    <Layout>
      <Helmet>
        <script
          src="https://cbet.quickschools.com/sms/es/application?divId=application-form"
          async
        ></script>
      </Helmet>
      {/* <Script
        src="https://cbet.quickschools.com/sms/es/application?divId=application-form"
        async={true}
      /> */}
      <Container>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div id="application-form" />
      </Container>
    </Layout>
  )
}
