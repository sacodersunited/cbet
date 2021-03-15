import React from "react"
import LayoutDetail from "../components/layoutDetail"
import { UseScript } from "../../hooks/use-script"

const PurdueCrcst = (props) => {
  if (typeof window !== "undefined") {
    if (typeof document !== `undefined`) {
      UseScript("https://embed.typeform.com/embed.js")
    }
  }
  return (
    <LayoutDetail>
      <iframe
        id="typeform-full"
        title="typeformfull"
        width="100%"
        height="100%"
        frameborder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/zoUUeneK?typeform-medium=embed-snippet"
      ></iframe>
    </LayoutDetail>
  )
}

export default PurdueCrcst
