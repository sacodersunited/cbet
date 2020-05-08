import React, { useCallback } from "react"
import { Image } from "react-bootstrap"
import { useDropzone } from "react-dropzone"
import banner from "../images/banner image.png"

export default function CbetDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Image src={banner} />
      ) : (
        // <div {...getRootProps({ className: "dropzone" })}>
        <Image src={banner} />
      )}
    </div>
  )
}
