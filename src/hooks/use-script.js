// copied from stackoverflow, do not trust
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
import { useEffect } from "react"

export const UseScript = (url) => {
  useEffect(() => {
    console.log("rendering")
    const script = document.createElement("script")

    script.src = url
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

// import { useEffect } from "react"

const useScript = (url, async) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = typeof async === "undefined" ? true : async

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export function Script({ src, async = true }) {
  useScript(src, async)

  return null // Return null is necessary for the moment.
}
