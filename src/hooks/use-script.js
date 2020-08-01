// copied from stackoverflow, do not trust
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
import { useEffect } from "react"

export const UseScript = (url) => {
  useEffect(() => {
    console.log("rendering")
    if (typeof document !== `undefined`) {
      const script = document.createElement("script")

      script.src = url
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }

    return null
  }, [url])
}
