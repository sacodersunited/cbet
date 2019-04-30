import React, { ReactDOM } from "react"
import * as d3 from "d3"
import * as topojson from "topojson"
// import props from "./props"
import "../css/globe.css"

class Globe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rotation: 0,
    }
  }

  render() {
    console.log("object", topojson)
    let projection = d3
      .geoOrthographic()
      .fitSize([this.props.size, this.props.size], this.props.geoJson)
      .rotate([this.state.rotation])

    let geoGenerator = d3.geoPath().projection(projection)

    let pathString = geoGenerator(this.props.geoJson)

    window.requestAnimationFrame(() => {
      this.setState({
        rotation: this.state.rotation + 0.2,
      })
    })

    return (
      <svg width={this.props.size} height={this.props.size}>
        <path d={pathString} />
      </svg>
    )
  }
}

d3.json("https://codepen.io/frontendcharts/pen/JBprpp.js", (err, json) => {
  console.log("json", json)
  let geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries)

  console.log("geoJson", geoJson, err, json)
  ReactDOM.render(
    <Globe geoJson={geoJson} size={400} />,
    document.getElementById("globe")
  )
})
