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

export const TestimonialsData = [
  {
    name: "Emmanuel E",
    type: "BMET Degree",
    state: "Africa",
    date: "Sep 2019",
    comment: `My experience in the College of Biomedical Equipment Technology, has been absolutely incredible. I‘ve been constantly amazed by the kindness, familial mutuality, and camaraderie that I‘ve encountered so far. I‘ve had the pleasure of meeting and learning from great mentors, working with great scholars. Studying in CBET is for me a dream come true, because it gives me a perfect opportunity to learn what I exactly want to pursue. The lecturers are not only friendly but also with whopping industry experiences, so that we can learn from their amazing experiences. The staff members also care about the future career of students. good relationship with co students, flexible nature of programme and the ability to study when and where it suits me, all online! The teaching is great and course structure is nice and easy to follow. I would recommend CBET to anyone who wants to study and work at the same time.`,
  },
  {
    name: "Beena N",
    type: "BMET Certificate",
    state: "Texas",
    date: "May 2019",
    comment: `"I have had a couple of struggles that led me to the course and keep me anchored. The course, the instructors and definitely, Mr. Gonzales and Mr. Bassuk, have been strong supporters, motivators, and just plain helpful. CBET is not your traditional tech school. The staff really cares about each and every person's success and strives with them to attain it. Thankful and Grateful."`,
  },
  {
    name: "Ann R.",
    type: "BMET Degree",
    state: "Pennsylvania",
    date: "April 2019 ",
    comment: `"I just started at CBET in January, so far it has been exactly what I was looking for. The classes are informative and meaningful and the instructors are eager to help you succeed."`,
  },
  {
    name: "Kyle B.",
    type: "BMET Degree",
    state: "Minnesota",
    date: "April 2019 ",
    comment: `"Made my move for my final and last career change. It is very rare to find an online accredited biomed college recognized by the industry. They have been nothing but upfront, great communication, email’s almost replied immediately and more than willing to work with my situation financially and my busy schedule since I will be working full time."`,
  },
  {
    name: "Joseph B.",
    type: "BMET Degree",
    state: "Georgia",
    date: "March 2019 ",
    comment: `"This school was exactly what I needed coming out of the military, the classes are great, the instructors are fantastic, overall one of the best school experiences I've had. Thank you CBET for helping to get me back into the civilian workforce."`,
  },
  {
    name: "Curtis F.",
    type: "BMET Certificate",
    state: "Georgia",
    date: "March 2019 ",
    comment: `"The most amazing thing about the CBET culture is how welcoming, both the faculty and fellow students are to new students. There is much more than excellent academics being taught here. The program far exceeded my expectations and has gone above and beyond in helping me to increase my understanding of the Healthcare Technology Management industry, as well as unparalleled tenacity in employment assistance to get you employment in the field. The instructors are great-well informed, experienced, personable, with a teaching style that not only passes along a great deal of information in relatively short period of time, but did so with a sense of humor and perspective which made everyone in the class – regardless of their skill level, feel at ease and looking forward to the next session. Lastly, in my opinion an outstanding vocational experience in a field that is only going up!"`,
  },
]

// https://stackoverflow.com/questions/52583277/get-user-city-and-country-in-react-native
export const getLocationToAddress = location => {
  const locationToFind = `${location.latitude},${location.longitude}`
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationToFind}&sensor=true&key=${this.props.mapkey}`

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
