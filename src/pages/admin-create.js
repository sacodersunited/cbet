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
const partnersList = [
  "Accet",
  "Texas Workforce Commission",
  "Texas Higher Education Board",
  "Veteran Owned Business",
  "MedWrench",
  "TechNation",
  "Tuition Financing",
  "Stephens International Recruiting",
  "CER Technology",
  "Summit Imaging",
  "New Braunfels Chamber of Commerce",
  "Catholic Health Initiatives",
  "Citizens Medical Center",
  "CYBERTEXAS Foundation",
  "Charney & Associates Recruiting",
  "Memorial Hermann",
  "SkillNet",
  "Vyaire",
  "SouthEastern Community College",
  "iMed Biomedical",
  "MiraCosta College",
  "U.S. Army",
  "Partnership for Youth Success",
  "Healthcare Technology Management Association of South Carolina",
  "Kentucky Association for Medical Instumentation",
]

partnersList.sort()

function AdminCreate() {
  const { register, handleSubmit, watch, errors } = useForm()
  const authContent = useCbetAuth() // code used for making api calls
  const [daysSelected, setDaysSelected] = useState(31) // number of days in month
  const [addMonth, setAddMonth] = useState("") // Month selected to add
  const [addDay, setAddDay] = useState("") // Day selected to add
  const [addYear, setAddYear] = useState("") // Year selected to add
  const [daysLength, setDaysLength] = useState(0) // number of days selected
  const [cbetContent, setCbetContent] = useState([]) // all cbet content blogs, jobs and events
  const [htmlContent, setHtmlContent] = useState("") // html content for blog post
  const [cbetContentCategory, setCbetContentCategory] = useState(0) // content Category
  const [thumbnailUpload, setThumbnailUpload] = useState([]) // thumbnail image
  const [cbetPartner, setCbetPartner] = useState("") // Partner dropdown list
  const [cbetTitle, setCbetTitle] = useState("") // Title
  const [featured, setFeatured] = useState(false) // is Featured?
  const [status, setStatus] = useState(false)

  useEffect(() => {
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      // fetch("http://localhost:7071/api/GetCbetContent")
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [authContent])

  const onSubmit = data => {
    alert(JSON.stringify(data))
    insertCbetContent(data)
  }

  function getCategoryName(cbetCategoryNumber) {
    switch (cbetCategoryNumber) {
      case 1:
        return "Job"
      case 2:
        return "Event"
      case 3:
        return "Blog"
      default:
        return "Cbet Category"
    }
  }

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

  function handleContentChange(content) {
    console.log("content is changing", content) //Get Content Inside Editor

    setHtmlContent(content)
  }

  function handleTitleChange(e) {
    e.preventDefault()
    setCbetTitle(e.target.value)
  }

  function handleFeatured(e) {
    e.preventDefault()
    setFeatured(e.target.value)
  }

  function handleCbetStatusChange(e) {
    e.preventDefault()
    setStatus(e.target.value)
  }

  function uploadThumbnail(files) {
    console.log("uploading thumbnail...", files)
    setThumbnailUpload(files)
  }

  function insertCbetContent(formData) {
    console.log("reached insert cbet content api call", formData)

    let cbetContent = {}

    switch (cbetContentCategory) {
      case 1: // Job
        cbetContent = {
          ID: 0, // number
          ContentTitle: formData.title, // string
          Description: htmlContent, // string
          PartnerName: cbetPartner, // string
          Author: "Paul c", // string
          ContentCreator: "Paul c", // string
          Status: status, // number
          CbetCategory: cbetContentCategory, // number
          Link: "http://google.com", // string - Event and Job only
          StartDate: `${addMonth}/${addDay}/${addYear}`, // date
          EndDate: "1/1/2021", // date
          Location: "san antonio, texas", // string
          Tags: "test,one,two", // string
          Featured: featured, // bool
        }
        break
      case 2: // Event
        cbetContent = {
          ID: 0, // number
          ContentTitle: formData.title, // string
          Description: htmlContent, // string
          PartnerName: cbetPartner, // string
          Author: "Paul c", // string
          ContentCreator: "Paul c", // string
          Status: status, // bool
          CbetCategory: cbetContentCategory, // number
          Link: "http://google.com", // string
          StartDate: `${addMonth}/${addDay}/${addYear}`, // date
          EndDate: "1/1/2021", // date
          Location: "san antonio, texas", // string - Event ONLY
          Tags: "test,one,two", // string
          Featured: featured, // bool
        }
        break
      case 3: // Blog
        cbetContent = {
          ID: 0, // number
          ContentTitle: formData.title, // string
          Description: htmlContent, // HTML for blog
          PartnerName: cbetPartner, // string
          Author: "Paul c", // string
          ContentCreator: "Paul c", // string
          Status: status, // bool
          CbetCategory: cbetContentCategory, // number
          Link: "", // string
          StartDate: `${addMonth}/${addDay}/${addYear}`, // date
          EndDate: "1/1/2021", // date
          Location: "", // string
          Tags: "test,one,two", // string
          Featured: featured, // bool
        }
        break
      default:
        return "Cbet Category"
    }

    const payload = new FormData()
    payload.append("file", thumbnailUpload[0])
    payload.append("cbetContent", JSON.stringify(cbetContent))

    const myInit = {
      method: "POST",
      body: payload,
    }

    try {
      // const response = fetch("http://localhost:7071/api/GetCbetContent", myInit)
      // const response = fetch(
      //   `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${this.props.code}`,
      //   myInit
      // )
      // console.log("response is ", response)
      // if (!response.ok) {
      //   console.log("response not OK.")
      // }
    } catch (e) {
      console.log(`catch error: ${e}`)
    }
  }

  function handleCbetPartnerChange(e) {
    e.preventDefault()

    console.log("handle Partners", e.target.value)

    setCbetPartner(e.target.value)
  }

  function handleCbetCategoryChange(e) {
    e.preventDefault()
    console.log("e", e.target.value, typeof e.target.value)
    setCbetContentCategory(Number(e.target.value))
  }

  return (
    <Layout title="Create/Edit" category={getCategoryName(cbetContentCategory)}>
      <SEO title="Admin Create Edit" />
      <Container fluid>
        <Row>
          <Col md={4}>
            <Form.Group controlId="selectCategory">
              <Form.Label>{getCategoryName(cbetContentCategory)}</Form.Label>
              <Form.Control
                as="select"
                name="category"
                ref={register({ required: true })}
                value={cbetContentCategory}
                onChange={handleCbetCategoryChange}
              >
                <option value="0">Select</option>
                <option value="1">Job</option>
                <option value="2">Event</option>
                <option value="3">Blog</option>
              </Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.category && "Cbet Category is required"}
              </Form.Label>
              <br></br>
            </Form.Group>

            <Form.Group controlId="TitleHere">
              <Form.Label>{`Title of ${getCategoryName(
                cbetContentCategory
              )}`}</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleTitleChange}
                ref={register({ required: true })}
              ></Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.title && "Title is required"}
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                ref={register({ required: true })}
                value={status}
                onChange={handleCbetStatusChange}
              >
                <option value="1">Active</option>
                <option value="0">Disabled</option>
              </Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.category && "Cbet Category is required"}
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="Partners">
              <Form.Label>Partners</Form.Label>
              <Form.Control
                as="select"
                name="partner"
                ref={register({ required: true })}
                value={cbetPartner}
                onChange={handleCbetPartnerChange}
              >
                <option value="0">Select</option>
                {partnersList.map(partner => {
                  return <option value={partner}>{partner}</option>
                })}
              </Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.author && "Partner is required"}
              </Form.Label>
              <br></br>
            </Form.Group>

            <Form.Group controlId="AuthorHere">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                ref={register({ required: true })}
              ></Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.author && "Author is required"}
              </Form.Label>
              <br></br>
            </Form.Group>

            <Form.Label>Publish Date</Form.Label>
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

            <Form.Label>Thumbnail</Form.Label>
            <Form.Group style={{ display: "flex", justifyContent: "center" }}>
              <CbetDropzone upload={uploadThumbnail}></CbetDropzone>
            </Form.Group>

            <Form.Row>
              <Form.Group
                as={Col}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="lg" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>
              </Form.Group>
              <Form.Group
                as={Col}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="lg">Cancel</Button>
              </Form.Group>
            </Form.Row>
          </Col>
          <Col md={8}>
            {(() => {
              switch (cbetContentCategory) {
                case 3:
                  return <Form.Label>Blog content</Form.Label>
                case 2:
                  return <Form.Label>Event content</Form.Label>
                case 1:
                  return <Form.Label>Job content</Form.Label>
                default:
                  return <Form.Label>Cbet Content</Form.Label>
              }
            })()}

            <SunEditor
              onChange={handleContentChange}
              setOptions={{ height: "auto", minHeight: "600px" }}
            />

            {cbetContentCategory === 1 ? (
              <Form.Group controlId="Featured">
                <Form.Control
                  id="isFeatured"
                  style={{ width: "100px" }}
                  as="select"
                  name="featured"
                  ref={register()}
                  onChange={handleFeatured}
                  value={featured}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
                <Form.Label>Featured</Form.Label>
              </Form.Group>
            ) : null}

            {cbetContentCategory === 2 ? (
              <Form.Group controlId="Location">
                <Form.Control
                  type="text"
                  name="Location"
                  ref={register()}
                ></Form.Control>
                <Form.Label style={{ color: "red" }}>
                  {errors.Location && "Location is required"}
                </Form.Label>
                <br></br>
                <Form.Label>{`Location of ${getCategoryName(
                  cbetContentCategory
                )}`}</Form.Label>
              </Form.Group>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AdminCreate
