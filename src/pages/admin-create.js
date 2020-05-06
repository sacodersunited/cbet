import React, { useState } from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import SunEditor from "suneditor-react"
import "suneditor/dist/css/suneditor.min.css"
import CbetDropzone from "../components/CbetDropzone"
import { calculateDays } from "../utils/utility"

const year = new Date().getFullYear()
const years = Array.from(new Array(40), (val, index) => year - index)

function AdminCreate() {
  const { register, handleSubmit, watch, errors } = useForm()
  const [daysSelected, setDaysSelected] = useState(31)
  const [addMonth, setAddMonth] = useState("")
  const [addDay, setAddDay] = useState("")
  const [addYear, setAddYear] = useState("")
  const [daysLength, setDaysLength] = useState(0)

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
                inputRef={register({ required: true })}
              >
                <option value="">Select</option>
                <option value="Job">Job</option>
                <option value="Event">Event</option>
                <option value="Blog">Blog</option>
              </Form.Control>
              <Form.Label>Job, Event or Blog Post</Form.Label>
              {errors.category && "Cbet Category is required"}
            </Form.Group>

            <Form.Group controlId="TitleHere">
              <Form.Control
                type="text"
                name="title"
                inputRef={register({ required: true })}
              ></Form.Control>
              {errors.title && "Title is required"}

              <Form.Label>Title of Blog Post</Form.Label>
            </Form.Group>

            <Form.Group controlId="AuthorHere">
              <Form.Control
                type="text"
                inputRef={register({ required: true })}
              ></Form.Control>
              <Form.Label>Author</Form.Label>
            </Form.Group>

            <Form.Row controlId="selectCategory">
              <Form.Group as={Col}>
                <Form.Control
                  id="addMonth"
                  style={{ width: "75px" }}
                  as="select"
                  name="month"
                  inputRef={register({ required: true })}
                  onChange={handleDates}
                >
                  <option value="MM">MM</option>
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
                <Form.Label>Month</Form.Label>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  id="addDay"
                  style={{ width: "75px" }}
                  as="select"
                  name="day"
                  inputRef={register({ required: true })}
                  onChange={handleDates}
                >
                  <option value="DD">DD</option>
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
                      console.log("number of days", numberOfDays, daysSelected)
                      return Number(numberOfDays) <= daysSelected
                    })
                    .map(day => {
                      console.log("day", day)
                      return (
                        <option
                          value={`${day}`}
                          key={`day-${Number(day)}`}
                        >{`${day}`}</option>
                      )
                    })}
                </Form.Control>
                <Form.Label>Day</Form.Label>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  id="addYear"
                  style={{ width: "100px" }}
                  as="select"
                  name="year"
                  inputRef={register({ required: true })}
                  onChange={handleDates}
                >
                  <option value="YYYY">YYYY</option>
                  {years.map((everyYear, index) => {
                    const keyIndex = index
                    return (
                      <option key={`everyYear-${keyIndex}`} value={everyYear}>
                        {everyYear}
                      </option>
                    )
                  })}
                </Form.Control>
                <Form.Label>Year</Form.Label>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <CbetDropzone></CbetDropzone>
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
            <SunEditor />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AdminCreate
