import React, { useCallback, useState } from "react"
import { Image } from "react-bootstrap"
import { useDropzone } from "react-dropzone"
import dropzone from "../images/drops/dropzone.png"
import dropzone_Active from "../images/drops/DropZone Active.png"
import dropzone_Complete from "../images/drops/DropZone Complete.png"
import dropzone_Uploading from "../images/drops/DropZone Uploading.png"

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
        <Image src={dropzone_Active} onClick={clickUpload} />
      ) : (
        // <div {...getRootProps({ className: "dropzone" })}>
        <Image src={dropzone} onClick={clickUpload} />
      )}
    </div>
  )
}
