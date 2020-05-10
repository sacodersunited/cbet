import React, { useCallback, useState } from "react"
import { Image } from "react-bootstrap"
import { useDropzone } from "react-dropzone"
import banner from "../images/banner image.png"

export default function CbetDropzone(props) {
  const [isUploading, setIsUploading] = useState(false)
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    if (acceptedFiles.length === 0) {
      return
    }

    props.upload(acceptedFiles, setIsUploading(false))
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  function clickUpload(e) {
    e.preventDefault()
    setIsUploading(true)
  }

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Image src={banner} onClick={clickUpload} />
      ) : (
        // <div {...getRootProps({ className: "dropzone" })}>
        <Image src={banner} onClick={clickUpload} />
      )}
    </div>
  )
}
