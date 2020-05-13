import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col, Form, ListGroup } from "react-bootstrap"
import { useForm } from "react-hook-form"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import SunEditor from "suneditor-react"
import "suneditor/dist/css/suneditor.min.css"
import CbetDropzone from "../components/CbetDropzone"
import useCbetAuth from "../hooks/use-cbet-auth"
import CbetDatePicker from "../components/CbetDatePicker"
import { FaCheck, FaSpinner } from "react-icons/fa"
import styled from "styled-components"

const SpinSpinner = styled(FaSpinner)`
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  animation: spin 1.5s infinite;
`

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
  const { register, handleSubmit, watch, errors, setValue } = useForm()
  const authContent = useCbetAuth() // code used for making api calls
  const [cbetContent, setCbetContent] = useState([]) // all cbet content blogs, jobs and events
  const [htmlContent, setHtmlContent] = useState("") // html content for blog post
  const [cbetContentCategory, setCbetContentCategory] = useState(1) // content Category
  const [thumbnailUpload, setThumbnailUpload] = useState([]) // thumbnail image
  const [cbetPartner, setCbetPartner] = useState("") // Partner dropdown list
  const [cbetTitle, setCbetTitle] = useState("") // Title
  const [featured, setFeatured] = useState(false) // is Featured?
  const [status, setStatus] = useState(false)
  const [publishDate, setPublishDate] = useState("")
  const [startDate, setStartDate] = useState("1/1/2020")
  const [endDate, setEndDate] = useState("1/1/2021")
  const [author, setAuthor] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [location, setLocation] = useState("")
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      // fetch("http://localhost:7071/api/GetCbetContent")
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })

    register({ name: "cbetDropzone" }, { required: true })
    register(
      { name: "publishDate" },
      { required: true, validate: value => Date.parse(value) !== isNaN }
    )
    register({ name: "htmlContent" }, { required: true })
    const dateF = new Date()
    const day = dateF.getDate()
    const monthIndex = dateF.getMonth()
    const year = dateF.getFullYear()

    const month = monthIndex + 1
    setValue("publishDate", `${month}/${day}/${year}`)
  }, [])

  const onSubmit = data => {
    console.log("form data", data)
    if (cbetContentCategory === 0) {
      setSubmitMessage("Select a Cbet Category to save.")
      return
    }
    setIsSubmitting(true)
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
        return "Category"
    }
  }

  function handleLoadHtmlEditor(reload) {
    console.log("reload html editor", reload) //Boolean
  }

  function handleContentChange(content) {
    console.log("content is changing", content) //Get Content Inside Editor
    setValue("htmlContent", content)
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
    setValue("cbetDropzone", files)
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
          StartDate: publishDate, // date
          EndDate: publishDate, // date
          Location: "", // string
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
          StartDate: startDate, // date
          EndDate: endDate, // date
          Location: formData.location, // string - Event ONLY
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
          StartDate: publishDate, // date
          EndDate: publishDate, // date
          Location: "", // string
          Tags: "test,one,two", // string
          Featured: featured, // bool
        }
        break
      default:
        return "Cbet Category"
    }

    console.log("payload", cbetContent)

    const payload = new FormData()
    payload.append("file", thumbnailUpload[0])
    payload.append("cbetContent", JSON.stringify(cbetContent))

    const myInit = {
      method: "POST",
      body: payload,
    }

    try {
      // const response = fetch("http://localhost:7071/api/GetCbetContent", myInit)
      const response = fetch(
        `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`,
        myInit
      )

      if (!response.ok) {
        console.log("response not OK.")
        setIsSubmitting(false)
      }

      console.log("response is OK")

      setIsSubmitting(false)
    } catch (e) {
      console.log(`catch error: ${e}`)
    }
  }

  function handleCbetPartnerChange(e) {
    e.preventDefault()

    // console.log("handle Partners", e.target.value)
    setCbetPartner(e.target.value)
  }

  function handleCbetCategoryChange(e) {
    e.preventDefault()

    const CategorySelected = Number(e.target.value)
    setCbetContentCategory(CategorySelected)
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handleAuthor(e) {
    setAuthor(e.target.value)
  }

  function getPublishDate(renderedDate) {
    // console.log("Get publish date", renderedDate)
    console.log("is date valid?", Date.parse(renderedDate))
    setValue("publishDate", renderedDate)
    setPublishDate(renderedDate)
  }

  function getStartDate(startDate) {
    // console.log("get STart Date", startDate)
    setStartDate(startDate)
  }

  function getEndDate(endDate) {
    // console.log("get end date", endDate)
    setEndDate(endDate)
  }

  function clearFields() {
    console.log("clearing fields")
    // setCbetContentCategory(1)
    setCbetTitle("")
    setAuthor("")
    setCbetPartner("0")
    setHtmlContent("")
    setLocation("")
  }

  return (
    <Layout title="Create/Edit" category={getCategoryName(cbetContentCategory)}>
      <SEO title="Admin Create Edit" />
      <Container fluid>
        <Row>
          <Col md={4}>
            <Form.Group controlId="selectCategory">
              <Form.Label style={{ fontWeight: "bold" }}>
                {getCategoryName(cbetContentCategory)}
              </Form.Label>
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
                {errors.category && "* Cbet Category is required"}
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="TitleHere">
              <Form.Label
                style={{ fontWeight: "bold" }}
              >{`Title of ${getCategoryName(cbetContentCategory)}`}</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleTitleChange}
                value={cbetTitle}
                ref={register({ required: true })}
              ></Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.title && "* Title is required"}
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label style={{ fontWeight: "bold" }}>Status</Form.Label>
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
                {errors.category && "* Cbet Category is required"}
              </Form.Label>
            </Form.Group>

            {cbetContentCategory !== 3 ? (
              <Form.Group controlId="Partners">
                <Form.Label style={{ fontWeight: "bold" }}>Partners</Form.Label>
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
                  {errors.author && "* Partner is required"}
                </Form.Label>
              </Form.Group>
            ) : null}

            <Form.Group controlId="AuthorHere">
              <Form.Label style={{ fontWeight: "bold" }}>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={author}
                onChange={handleAuthor}
                ref={register({ required: true })}
              ></Form.Control>
              <Form.Label style={{ color: "red" }}>
                {errors.author && "* Author is required"}
              </Form.Label>
            </Form.Group>
            <Form.Row>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Publish Date
                </Form.Label>
                <CbetDatePicker getDate={getPublishDate} defaultDate />
                <Form.Label style={{ color: "red" }}>
                  {errors.publishDate && "* Valid Date is required"}
                </Form.Label>
              </Form.Group>
            </Form.Row>

            <Form.Label style={{ fontWeight: "bold" }}>Thumbnail</Form.Label>
            <Form.Group style={{ display: "flex", justifyContent: "center" }}>
              <CbetDropzone
                upload={uploadThumbnail}
                complete={thumbnailUpload.length > 0}
              ></CbetDropzone>
              <Form.Label style={{ color: "red" }}>
                {errors.cbetDropzone && "* Thumbnail upload is required"}
              </Form.Label>
            </Form.Group>
            {thumbnailUpload ? (
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: "0px",
                  marginTop: "0px",
                }}
              >
                {thumbnailUpload.map(file => (
                  <li key={file.name}>
                    <FaCheck
                      color="green"
                      size={22}
                      style={{ marginTop: "10px" }}
                    />
                    <span
                      style={{
                        color: "#005ea2",
                        marginTop: "10px",
                        marginLeft: "5px",
                        verticalAlign: "bottom",
                      }}
                      data-testid="uploadfilename"
                    >
                      {file.name}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Submit Message here */}
            {submitMessage.length > 1 ? (
              <Form.Label style={{ color: "red" }}>{submitMessage}</Form.Label>
            ) : null}

            {/* Save Cancel buttons */}
            <Form.Row>
              <Form.Group
                as={Col}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="lg" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>
                {isSubmitting ? <SpinSpinner data-testid="spinner" /> : null}
              </Form.Group>
              <Form.Group
                as={Col}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="lg">Cancel</Button>
              </Form.Group>
              <Form.Group
                as={Col}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button variant="outline-primary" onClick={clearFields}>
                  Clear
                </Button>
              </Form.Group>
            </Form.Row>
          </Col>
          <Col md={8}>
            {cbetContentCategory === 1 ? (
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Is Featured
                </Form.Label>
                <ListGroup horizontal>
                  <ListGroup.Item
                    as="button"
                    action
                    onClick={() => {
                      setFeatured(true)
                    }}
                    href="link1"
                    style={{ width: "77px" }}
                  >
                    On
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="button"
                    action
                    href="link2"
                    active={featured === false}
                    onClick={() => {
                      setFeatured(false)
                    }}
                    style={{ width: "77px" }}
                  >
                    Off
                  </ListGroup.Item>
                </ListGroup>
              </Form.Group>
            ) : null}

            {/* Event */}
            {cbetContentCategory === 2 ? (
              <>
                <Form.Row>
                  <Form.Group controlId="event dates">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Start Date
                    </Form.Label>
                    <CbetDatePicker getDate={getStartDate} />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Stop Date
                    </Form.Label>
                    <CbetDatePicker getDate={getEndDate} />
                  </Form.Group>
                </Form.Row>
              </>
            ) : null}
            <Form.Group>
              <Form.Label style={{ fontWeight: "bold" }}>
                {(() => {
                  switch (cbetContentCategory) {
                    case 3:
                      return "Blog content"
                    case 2:
                      return "Event content"
                    case 1:
                      return "Job content"
                    default:
                      return "Cbet Content"
                  }
                })()}
              </Form.Label>

              <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                {errors.htmlContent && "* Content is required"}
              </Form.Label>
              <SunEditor
                onChange={handleContentChange}
                onBlur={handleLoadHtmlEditor}
                setOptions={{ height: "auto", minHeight: 400 }}
              />
            </Form.Group>

            {/* Event */}
            {cbetContentCategory === 2 ? (
              <>
                <Form.Group controlId="Location" style={{ paddingTop: "10px" }}>
                  <Form.Label
                    style={{ fontWeight: "bold" }}
                  >{`Location of ${getCategoryName(
                    cbetContentCategory
                  )}`}</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleLocation}
                    ref={register()}
                  ></Form.Control>
                  <Form.Label style={{ color: "red" }}>
                    {errors.Location && "* Location is required"}
                  </Form.Label>
                </Form.Group>
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AdminCreate
