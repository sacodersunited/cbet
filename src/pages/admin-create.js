import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import SunEditor from "suneditor-react"
import "suneditor/dist/css/suneditor.min.css"
import CbetDropzone from "../components/CbetDropzone"
import { calculateDays } from "../utils/utility"
import useCbetAuth from "../hooks/use-cbet-auth"

const year = new Date().getFullYear()
const years = Array.from(new Array(40), (val, index) => year - index)

function AdminCreate() {
  const { register, handleSubmit, watch, errors } = useForm()
  const [daysSelected, setDaysSelected] = useState(31)
  const [addMonth, setAddMonth] = useState("")
  const [addDay, setAddDay] = useState("")
  const [addYear, setAddYear] = useState("")
  const [daysLength, setDaysLength] = useState(0)
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])
  const [thumbnailUpload, setThumbnailUpload] = useState([])

  useEffect(() => {
    fetch(
      `https://cbetcontent.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [authContent])

  const onSubmit = data => alert(JSON.stringify(data))

  function handleDates(event) {
    const newDate = event.target.value

    if (event.target.id === "addMonth") {
      setAddMonth(newDate)
      setDaysLength(calculateDays(newDate, addYear))
    } else if (event.target.id === "addDay") {
      setAddDay(newDate)
    } else if (event.target.id === "addYear") {
      setAddYear(newDate)
      setDaysLength(calculateDays(addMonth, newDate))
    }
  }

  function uploadThumbnail(files) {
    console.log("uploading thumbnail...", files)
    setThumbnailUpload(files)
  }

  function insertCbetContent() {
    console.log("reached insert cbet content api call")

    const cbetContent = {
      ID: 0, // number
      ContentTitle: "Test", // string
      Description: "<p>TEsting</p>", // string
      PartnerName: "partner", // string
      Author: "Paul c", // string
      ContentCreator: "Paul c", // string
      Status: 1, // number
      CbetCategory: 1, // number
      Link: "http://google.com", // string
      StartDate: "1/1/2020", // date
      EndDate: "1/1/2021", // date
      Location: "san antonio, texas", // string
      Tags: "test,one,two", // string
      Featured: false, // true/false
    }

    const payload = new FormData()
    payload.append("file", thumbnailUpload[0])
    payload.append(JSON.stringify(cbetContent))

    const myInit = {
      method: "POST",
      body: payload,
    }

    try {
      const response = fetch("http://localhost:7071/api/GetCbetContent", myInit)
      // const response = fetch(
      //   `https://CbetContent.azurewebsites.net/api/GetCbetContent?code=${this.props.code}`,
      //   myInit
      // )

      console.log("response is ", response)

      if (!response.ok) {
        console.log("response not OK.")
      }
    } catch (e) {
      console.log(`catch error: ${e}`)
    }
  }

  return (
    <Layout title="Create/Edit">
      <SEO title="Admin Create Edit" />
      <Container fluid>
        <Row>
          <Col md={4}>
            <Form.Group controlId="selectCategory">
              <Form.Control
                as="select"
                name="category"
                ref={register({ required: true })}
              >
                <option value="">Select</option>
                <option value="Job">Job</option>
                <option value="Event">Event</option>
                <option value="Blog">Blog</option>
              </Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.category && "Cbet Category is required"}
              </Form.Label>
              <br></br>
              <Form.Label>Job, Event or Blog Post</Form.Label>
            </Form.Group>

            <Form.Group controlId="TitleHere">
              <Form.Control
                type="text"
                name="title"
                ref={register({ required: true })}
              ></Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.title && "Title is required"}
              </Form.Label>
              <br></br>
              <Form.Label>Title of Blog Post</Form.Label>
            </Form.Group>

            <Form.Group controlId="AuthorHere">
              <Form.Control
                type="text"
                name="author"
                ref={register({ required: true })}
              ></Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.author && "Author is required"}
              </Form.Label>
              <br></br>
              <Form.Label>Author</Form.Label>
            </Form.Group>

            <Form.Row controlId="selectCategory">
              <Form.Group as={Col}>
                <Form.Control
                  id="addMonth"
                  style={{ width: "75px" }}
                  as="select"
                  name="month"
                  ref={register({ required: true })}
                  onChange={handleDates}
                >
                  <option value="">MM</option>
                  {[
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ].map(month => {
                    return (
                      <option
                        value={`${month}`}
                        key={Number(month)}
                      >{`${month}`}</option>
                    )
                  })}
                </Form.Control>
                <Form.Label style={{ color: "red" }}>
                  {errors.month && "Month is required."}
                </Form.Label>
                <br></br>
                <Form.Label>Month</Form.Label>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  id="addDay"
                  style={{ width: "75px" }}
                  as="select"
                  name="day"
                  ref={register({ required: true })}
                  onChange={handleDates}
                >
                  <option value="">DD</option>
                  {[
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                    "31",
                  ]
                    .filter(numberOfDays => {
                      return Number(numberOfDays) <= daysSelected
                    })
                    .map(day => {
                      return (
                        <option
                          value={`${day}`}
                          key={`day-${Number(day)}`}
                        >{`${day}`}</option>
                      )
                    })}
                </Form.Control>
                <Form.Label style={{ color: "red" }}>
                  {errors.day && "Day is required."}
                </Form.Label>
                <br></br>
                <Form.Label>Day</Form.Label>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  id="addYear"
                  style={{ width: "100px" }}
                  as="select"
                  name="year"
                  ref={register({ required: true })}
                  onChange={handleDates}
                >
                  <option value="">YYYY</option>
                  {years.map((everyYear, index) => {
                    const keyIndex = index
                    return (
                      <option key={`everyYear-${keyIndex}`} value={everyYear}>
                        {everyYear}
                      </option>
                    )
                  })}
                </Form.Control>
                <Form.Label style={{ color: "red" }}>
                  {errors.year && "Year is required."}
                </Form.Label>
                <br></br>
                <Form.Label>Year</Form.Label>
              </Form.Group>
            </Form.Row>
            <Form.Label>Publish Date</Form.Label>

            <Form.Group>
              <CbetDropzone upload={uploadThumbnail}></CbetDropzone>
              <Form.Label>Thumbnail</Form.Label>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Button size="lg" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>
              </Form.Group>
              <Form.Group as={Col}>
                <Button size="lg">Cancel</Button>
              </Form.Group>
            </Form.Row>
          </Col>
          <Col md={8}>
            <SunEditor setOptions={{ height: "auto", minHeight: "600px" }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AdminCreate
