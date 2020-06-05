import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// copied from https://codesandbox.io/s/silly-black-fkgwu
// do not trust

export default function Timer({ enrollmentEndDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(enrollmentEndDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })

  if (timerComponents.length) return timerComponents
  return <span className>Time is up. Please register next semester.</span>
}

Timer.propTypes = {
  enrollmentEndDate: PropTypes.string.isRequired,
}
