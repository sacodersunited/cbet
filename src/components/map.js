import React from "react"
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  // Markers,
  // Marker,
} from "react-simple-maps"
import worldmap from "../geography/110m.json"

const mapStyles = {
  width: "90%",
  margin: "0 auto",
  display: "block",
  height: "auto",
}

const markers = [
  { markerOffset: -15, name: "Buenos Aires", coordinates: [3.3792, 6.5244] },
  { markerOffset: -15, name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { markerOffset: -15, name: "Buenos Aires", coordinates: [-74.0721, 4.711] },
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-118.2437, 34.0522],
  },
]

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rotation: 0,
    }
  }

  // projection = (width, height) => {
  //   return (
  //     geoConicEqualArea()
  //       // .parallels([29.5, 45.5])
  //       // .scale(100)
  //       // .translate([width / 2, height / 2])
  //       .rotate([this.state.rotation, 0])
  //   )
  // }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ComposableMap
          width={500}
          height={500}
          projection="orthographic"
          projectionConfig={{
            scale: 100,
            rotation: [-10, 0, 0],
          }}
          style={mapStyles}
        >
          <ZoomableGlobe>
            <circle
              cx={250}
              cy={250}
              r={100}
              fill="transparent"
              stroke="#CFD8DC"
            />
            <Geographies disableOptimization geography={worldmap}>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={geo.id + i}
                    geography={geo}
                    projection={proj}
                    style={{
                      default: {
                        fill: "#CFD8DC",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGlobe>
        </ComposableMap>
      </div>
    )
  }
}

export default Map

{
  /* <Markers>
{markers.map(marker => (
  <Marker
    marker={marker}
    style={{
      hidden: { display: "none" },
      default: { fill: "#FF5722" },
      hover: { fill: "#FFFFFF" },
      pressed: { fill: "#FF5722" },
    }}
  >
    <circle cx={0} cy={0} r={3} fill="#FF5722" stroke="#FFF" />
    <text
      textAnchor="middle"
      y={marker.markerOffset}
      style={{
        fontFamily: "Roboto, sans-serif",
        fill: "#607D8B",
      }}
    >
      {marker.name}
    </text>
  </Marker>
))}
</Markers> */
}
