import React from "react"
import { FaCircle } from "react-icons/fa"

export const showActive = catIsActive => {
  return catIsActive ? (
    <small>
      <FaCircle
        className="mr-1"
        color="#5EE2A0"
        style={{ verticalAlign: "baseline" }}
      />
      Active
    </small>
  ) : (
    <small>
      <FaCircle
        className="mr-1"
        color="#E25E5E"
        style={{ verticalAlign: "baseline" }}
      />
      Disabled
    </small>
  )
}
