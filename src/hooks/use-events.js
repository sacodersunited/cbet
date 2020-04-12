import { graphql, useStaticQuery } from "gatsby"

const UseEvents = () => {
  const data = useStaticQuery(graphql`
    query eventsQuery {
      allEventsYaml {
        nodes {
          id
          name
          link
          location
          status
          startDate(formatString: "MMM DD")
          endDate(formatString: "MMM DD")
        }
      }
    }
  `)

  return data.allEventsYaml.nodes.map(event => ({
    id: event.id,
    name: event.name,
    link: event.link,
    location: event.location,
    status: event.status,
    startDate: event.startDate,
    endDate: event.endDate,
  }))
}

export default UseEvents
