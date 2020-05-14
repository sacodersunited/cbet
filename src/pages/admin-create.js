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
  {
    name: "Accet",
    link: "https://cbet.blob.core.windows.net/cbetblobs/accet.svg",
  },
  {
    name: "Texas Workforce Commission",
    link: "https://cbet.blob.core.windows.net/cbetblobs/twc-logo.jpg",
  },
  {
    name: "Texas Higher Education Board",
    link: "https://cbet.blob.core.windows.net/cbetblobs/TXHigherEd.png",
  },
  {
    name: "Veteran Owned Business",
    link: "https://cbet.blob.core.windows.net/cbetblobs/vet-owned.png",
  },
  {
    name: "MedWrench",
    link: "https://cbet.blob.core.windows.net/cbetblobs/Medwrench-logo.png",
  },
  {
    name: "TechNation",
    link: "https://cbet.blob.core.windows.net/cbetblobs/TechNation_logo.png",
  },
  {
    name: "Tuition Financing",
    link: "https://cbet.blob.core.windows.net/cbetblobs/tfc_logo.png",
  },
  {
    name: "Stephens International Recruiting",
    link: "https://cbet.blob.core.windows.net/cbetblobs/si-recruiting.png",
  },
  {
    name: "CER Technology",
    link: "https://cbet.blob.core.windows.net/cbetblobs/cer-logo.png",
  },
  {
    name: "Summit Imaging",
    link: "https://cbet.blob.core.windows.net/cbetblobs/summit-logo.jpg",
  },
  {
    name: "New Braunfels Chamber of Commerce",
    link: "https://cbet.blob.core.windows.net/cbetblobs/NBChambers-logo.png",
  },
  {
    name: "Catholic Health Initiatives",
    link: "https://cbet.blob.core.windows.net/cbetblobs/chi-health.jpg",
  },
  {
    name: "Citizens Medical Center",
    link: "https://cbet.blob.core.windows.net/cbetblobs/citizens.png",
  },
  {
    name: "CYBERTEXAS Foundation",
    link: "https://cbet.blob.core.windows.net/cbetblobs/logo-cyberTexas.png",
  },
  {
    name: "Charney & Associates Recruiting",
    link: "https://cbet.blob.core.windows.net/cbetblobs/charney-logo.png",
  },
  {
    name: "Memorial Hermann",
    link:
      "https://cbet.blob.core.windows.net/cbetblobs/memorial-hermann-logo.jpg",
  },
  {
    name: "SkillNet",
    link: "https://cbet.blob.core.windows.net/cbetblobs/skillnet.png",
  },
  {
    name: "Vyaire",
    link: "https://cbet.blob.core.windows.net/cbetblobs/Vyaire_Medical_Art.jpg",
  },
  {
    name: "SouthEastern Community College",
    link: "https://cbet.blob.core.windows.net/cbetblobs/scc-logo.png",
  },
  {
    name: "iMed Biomedical",
    link: "https://cbet.blob.core.windows.net/cbetblobs/iMed-Biomedical.png",
  },
  {
    name: "MiraCosta College",
    link: "https://cbet.blob.core.windows.net/cbetblobs/mira-costa-college.png",
  },
  {
    name: "U.S. Army",
    link: "https://cbet.blob.core.windows.net/cbetblobs/ArmyLogo.jpg",
  },
  {
    name: "Partnership for Youth Success",
    link: "https://cbet.blob.core.windows.net/cbetblobs/REGISTEREDlogo.jpg",
  },
  {
    name: "Healthcare Technology Management Association of South Carolina",
    link: "https://cbet.blob.core.windows.net/cbetblobs/HTMA-SC-logo.jpg",
  },
  {
    name: "Kentucky Association for Medical Instumentation",
    link: "https://cbet.blob.core.windows.net/cbetblobs/kami-logo.png",
  },
]

partnersList.sort()

function AdminCreate() {
  const { register, handleSubmit, errors, setValue } = useForm()
  const authContent = useCbetAuth() // code used for making api calls
  const [htmlContent, setHtmlContent] = useState("") // html content for blog post
  const [cbetContentCategory, setCbetContentCategory] = useState(1) // content Category
  const [thumbnailUpload, setThumbnailUpload] = useState([]) // thumbnail image
  const [cbetPartner, setCbetPartner] = useState("") // Partner dropdown list
  const [cbetTitle, setCbetTitle] = useState("") // Title
  const [featured, setFeatured] = useState(false) // is Featured?
  const [status, setStatus] = useState(false) // Status: active/disabled
  const [publishDate, setPublishDate] = useState("")
  const [startDate, setStartDate] = useState("1/1/2020")
  const [endDate, setEndDate] = useState("1/1/2021")
  const [author, setAuthor] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [location, setLocation] = useState("")
  const [submitMessage, setSubmitMessage] = useState("")
  const [isDone, setIsDone] = useState(false)
  const [link, setLink] = useState("")

  useEffect(() => {
    register({ name: "cbetDropzone" }, { required: true })
    register(
      { name: "publishDate" },
      { required: true, validate: value => Date.parse(value) !== isNaN }
    )
    register({ name: "htmlContent" }, { required: true })
    setLocation("Unknown")

    // Set default dates for each date field
    const dateF = new Date()
    const day = dateF.getDate()
    const monthIndex = dateF.getMonth()
    const year = dateF.getFullYear()

    const month = monthIndex + 1
    setValue("publishDate", `${month}/${day}/${year}`)
    setStartDate(`${month}/${day}/${year}`)
    setEndDate(`${month}/${day}/${year}`)
    setPublishDate(`${month}/${day}/${year}`)
  }, [])

  const onSubmit = data => {
    console.log("form data", data)
    if (cbetContentCategory === 0) {
      setSubmitMessage("Select a Cbet Category to save.")
      return
    }

    if (Date.parse(startDate) === isNaN) {
      console.log("Start date is not valid")
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
      }

      console.log("response is OK")

      setTimeout(() => {
        setIsSubmitting(false)
        clearFields()
        setIsDone(true)
        ClearDone()
      }, 3000)
    } catch (e) {
      console.log(`catch error: ${e}`)
    }
  }

  function ClearDone() {
    setTimeout(() => {
      setIsDone(false)
    }, 5000)
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

    if (CategorySelected !== 2) {
      setLocation("Unknown")
    } else {
      setLocation("")
    }
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handleAuthor(e) {
    setAuthor(e.target.value)
  }

  function handleLink(e) {
    setLink(e.target.value)
  }

  function getPublishDate(renderedDate) {
    // console.log("Get publish date", renderedDate)
    // console.log("is date valid?", Date.parse(renderedDate))
    setValue("publishDate", renderedDate)
    setPublishDate(renderedDate)
  }

  function getStartDate(startDateCbet) {
    // console.log("get STart Date", startDate)
    console.log("start date is ", Date.parse(startDateCbet))
    setStartDate(startDateCbet)
  }

  function getEndDate(endDateCbet) {
    // console.log("get end date", endDate)
    setEndDate(endDateCbet)
  }

  function clearFields() {
    console.log("clearing fields")
    // setCbetContentCategory(1)
    setCbetTitle("")
    setAuthor("")
    setCbetPartner("0")
    setHtmlContent("")
    setLocation("")
    setThumbnailUpload([])
  }

  return (
    <Layout title="Create/Edit" category={getCategoryName(cbetContentCategory)}>
      <SEO title="Admin Create Edit" />
      <Container fluid>
        <Row>
          <Col md={4}>
            {isDone ? (
              <Form.Label>
                <FaCheck color="green" size={22}></FaCheck>
                <span
                  style={{
                    marginLeft: "5px",
                    verticalAlign: "bottom",
                  }}
                  data-testid="uploadfilename"
                >
                  {`${getCategoryName(cbetContentCategory)} is submitted`}
                </span>
              </Form.Label>
            ) : null}
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

            {/* Blog only */}
            {cbetContentCategory !== 3 ? (
              <React.Fragment>
                <Form.Group controlId="Partners">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Partners
                  </Form.Label>
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
                <Form.Group>
                  <Form.Label style={{ fontWeight: "bold" }}>Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="link"
                    value={link}
                    onChange={handleLink}
                    ref={register({ required: true })}
                  ></Form.Control>
                  <Form.Label style={{ color: "red" }}>
                    {errors.link && "* Link is required"}
                  </Form.Label>
                </Form.Group>
              </React.Fragment>
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

            {/* Jobs only */}
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

            {/* <Form.Label style={{ fontWeight: "bold" }}>Thumbnail</Form.Label>
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
            ) : null} */}

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
                {isSubmitting === true ? (
                  <SpinSpinner data-testid="spinner" />
                ) : null}
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
            {/* Event */}
            {cbetContentCategory === 2 ? (
              <Col md={5}>
                <Form.Row>
                  <Form.Group controlId="event dates">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Start Date
                    </Form.Label>
                    <CbetDatePicker getDate={getStartDate} defaultDate />
                    <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                      {Date.parse(startDate) === isNaN &&
                        "* Start date must be a valid date."}
                    </Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      End Date
                    </Form.Label>
                    <CbetDatePicker getDate={getEndDate} defaultDate />
                    <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                      {Date.parse(endDate) === isNaN &&
                        "* End date must be a valid date."}
                    </Form.Label>
                  </Form.Group>
                </Form.Row>
              </Col>
            ) : null}

            {/* Blog only */}
            {cbetContentCategory === 3 ? (
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Blog content
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
            ) : null}

            {/* Event */}
            {cbetContentCategory === 2 ? (
              <Col md={3}>
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
                    ref={register({ required: true })}
                  ></Form.Control>
                  <Form.Label style={{ color: "red" }}>
                    {errors.location && "* Location is required"}
                  </Form.Label>
                </Form.Group>
              </Col>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AdminCreate
