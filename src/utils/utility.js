export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const ToShortDate = dt => {
  var month_names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  var day = dt.getDate()
  var month_index = dt.getMonth()
  // var year = this.getFullYear()

  return month_names[month_index] + " " + day
}

export const ToStartDate = dt => {
  var month_names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  var day = dt.getDate()
  var month_index = dt.getMonth()
  var year = dt.getFullYear()

  return month_names[month_index] + " " + day + ", " + year
}

// https://stackoverflow.com/questions/52583277/get-user-city-and-country-in-react-native
export const getLocationToAddress = location => {
  const locationToFind = `${location.latitude},${location.longitude}`
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationToFind}&sensor=true&key=${
    this.props.mapkey
  }`

  fetch(url)
    .then(resp => resp.json())
    .then(result => {
      const { results } = result

      if (results) {
        for (var ac = 0; ac < results[0].address_components.length; ac++) {
          var component = results[0].address_components[ac]

          switch (component.types[0]) {
            case "locality":
              this.setState({
                city: component.long_name,
              })
              break
            case "administrative_area_level_1":
              this.setState({
                state: component.long_name,
              })
              break
            case "country":
              this.setState({
                country: component.long_name,
              })
              break
            default:
              break
          }
        }
      }
    })
    .catch(e => {
      console.log(e)
    })
}
