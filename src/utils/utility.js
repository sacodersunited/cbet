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
