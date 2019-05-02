import React from "react"
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const mapStyles = {
  width: "90%",
  margin: "0 auto",
  display: "block",
  height: "auto",
}

const markers = [
  { coordinates: [3.3792, 6.5244] },
  { coordinates: [139.6917, 35.6895] },
  { coordinates: [-74.0721, 4.711] },
  { coordinates: [-118.2437, 34.0522] },
]

const Map = () => (
  <div style={{ width: "100%" }}>
    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 100 }}
      style={mapStyles}
    >
      <ZoomableGlobe>
        <circle cx={250} cy={250} r={100} fill="transparent" stroke="#CFD8DC" />
        <Geographies
          disableOptimization
          geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
        >
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
        <Markers>
          {markers.map(marker => (
            <Marker
              marker={marker}
              style={{
                hidden: { display: "none" },
              }}
            >
              <circle cx={0} cy={0} r={3} fill="#FF5722" stroke="#FFF" />
            </Marker>
          ))}
        </Markers>
      </ZoomableGlobe>
    </ComposableMap>
  </div>
)

export default Map
