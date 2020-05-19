import React, { useState, useEffect } from "react"
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"
import { useForm } from "react-hook-form"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import SunEditor, { buttonList } from "suneditor-react"
import "suneditor/dist/css/suneditor.min.css"
import CbetDropzone from "../components/CbetDropzone"
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

partnersList.sort((a, b) => {
  if (a.name < b.name) {
    return -1
  }
  return 1
})

const linkValidator = new RegExp(
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
)

export default function AdminCreate(props) {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset,
    unregister,
  } = useForm()
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
  const [cbetDescription, setCbetDescription] = useState("")
  const [partnerLink, setPartnerLink] = useState("")
  const [initialHtmlContents, setInitialHtmlComments] = useState("")
  const [contentID, setContentID] = useState(0)

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
    setPublishDate(`${month}/${day}/${year}`)
    setStartDate(`${month}/${day}/${year}`)
    setEndDate(`${month}/${day}/${year}`)

    if (props.location.state.cbetContent !== undefined) {
      console.log("form Props", props.location.state)
      const cbetContent = props.location.state.cbetContent

      console.log("job,event,blog", cbetContent)
      setContentID(cbetContent.Id)
      // job = 1, event = 2, blog = 3
      switch (cbetContent.Category) {
        case 1:
          setCbetContentCategory(cbetContent.CbetCategory_Id)
          setAuthor(cbetContent.Author)
          setCbetTitle(cbetContent.Title)
          setCbetDescription(cbetContent.Description)
          setFeatured(cbetContent.Featured)
          setStatus(cbetContent.Status)
          setLink(cbetContent.Link)
          setPublishDate(cbetContent.StartDate)
          unregister("cbetDropzone")
          unregister("htmlContent")
          break
        case 2:
          unregister("cbetDropzone")
          unregister("htmlContent")
          setCbetContentCategory(cbetContent.CbetCategory_Id)
          setCbetTitle(cbetContent.Title)
          setCbetDescription(cbetContent.Description)
          setLink(cbetContent.Link)
          setStatus(cbetContent.Status)
          setLocation(cbetContent.Location)
          break
        case 3:
          setCbetContentCategory(cbetContent.CbetCategory_Id)
          setCbetTitle(cbetContent.Title)
          setAuthor(cbetContent.Author)
          setInitialHtmlComments(cbetContent.Description)
          break
        default:
          break
      }
    }

    if (props.location.state.create === true) {
      console.log("Clicked on Create button and now in admin-create")
      clearFields()
    }

    console.log("inside useEffect")
  }, [])

  function getTodaysDate() {
    const dateF = new Date()
    const day = dateF.getDate()
    const monthIndex = dateF.getMonth()
    const year = dateF.getFullYear()

    const month = monthIndex + 1
    return `${month}/${day}/${year}`
  }

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
          ID: contentID, // number
          ContentTitle: formData.title, // string
          Description: cbetDescription, // string
          Thumbnail: partnerLink, // string for url link from partner
          PartnerName: cbetPartner, // string
          Author: author, // string
          ContentCreator: author, // string
          Status: status, // number
          CbetCategory: cbetContentCategory, // number
          Link: link, // string - Event and Job only
          StartDate: publishDate, // date
          EndDate: publishDate, // date
          Location: "", // string
          Tags: "one,two", // string
          Featured: featured, // bool
        }
        break
      case 2: // Event
        cbetContent = {
          ID: contentID, // number
          ContentTitle: formData.title, // string
          Description: cbetDescription, // string
          Thumbnail: "",
          PartnerName: cbetPartner, // string
          Author: author, // string
          ContentCreator: author, // string
          Status: status, // bool
          CbetCategory: cbetContentCategory, // number
          Link: link, // string
          StartDate: startDate, // date
          EndDate: endDate, // date
          Location: formData.location, // string - Event ONLY
          Tags: "one,two", // string
          Featured: featured, // bool
        }
        break
      case 3: // Blog
        cbetContent = {
          ID: contentID, // number
          ContentTitle: formData.title, // string
          Description: htmlContent, // HTML for blog
          Thumbnail: "",
          PartnerName: cbetPartner, // string
          Author: author, // string
          ContentCreator: author, // string
          Status: status, // bool
          CbetCategory: cbetContentCategory, // number
          Link: link, // string
          StartDate: publishDate, // date
          EndDate: publishDate, // date
          Location: "", // string
          Tags: "one,two", // string
          Featured: featured, // bool
        }
        break
      default:
        return "Cbet Category"
    }

    console.log("payload", cbetContent)

    const payload = new FormData()
    if (thumbnailUpload.length > 0) {
      payload.append("file", thumbnailUpload[0])
    } else {
      payload.append("file", null)
    }
    payload.append("cbetContent", JSON.stringify(cbetContent))

    const myInit = {
      method: "POST",
      body: payload,
    }

    try {
      const response = fetch("http://localhost:7071/api/GetCbetContent", myInit)
      // const response = fetch(
      //   `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`,
      //   myInit
      // )

      console.log("response is ", response)

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

    const partner = partnersList.find(
      element => element.name === e.target.value
    )
    console.log("find partner", partner.link)

    setPartnerLink(partner.link)
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

    if (CategorySelected === 1) {
      unregister("cbetDropzone")
      unregister("htmlContent")
      unregister("startDate")
      unregister("endDate")
      // unregister("")
    } else if (CategorySelected === 2) {
      console.log("changed cat to Event")
      unregister("cbetDropzone")
      unregister("htmlContent")
      const newDate = getTodaysDate()
      console.log("newdate for cat", newDate)
      register(
        { name: "startDate" },
        { required: true, validate: value => Date.parse(value) !== isNaN }
      )
      register(
        { name: "endDate" },
        { required: true, validate: value => Date.parse(value) !== isNaN }
      )
      setValue("startDate", newDate)
      setValue("endDate", newDate)
    } else if (CategorySelected === 3) {
      register({ name: "htmlContent" }, { required: true })
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

  function handleCbetDescription(e) {
    console.log("cbetDescription", e.target.value, cbetDescription)
    setCbetDescription(e.target.value)
  }

  function getPublishDate(renderedDate) {
    setValue("publishDate", renderedDate)
    setPublishDate(renderedDate)
  }

  function getStartDate(startDateCbet) {
    console.log("get Start Date function in adminCreate", startDate)
    console.log("start date is ", Date.parse(startDateCbet), startDateCbet)
    setValue("startDate", startDateCbet)
    setStartDate(startDateCbet)
  }

  function getEndDate(endDateCbet) {
    console.log("get end date", endDate)
    setValue("endDate", endDateCbet)
    setEndDate(endDateCbet)
  }

  function clearFields() {
    reset()
    console.log("clearing fields")
    setCbetTitle("")
    setAuthor("")
    setCbetPartner("0")
    setHtmlContent("")
    setLocation("")
    setThumbnailUpload([])
    setLink("")
    setCbetDescription("")
  }

  return (
    <Layout
      title="Create/Edit"
      category={getCategoryName(cbetContentCategory)}
      clickNew={clearFields}
    >
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

            {/* Job only */}
            {cbetContentCategory === 1 ? (
              <Form.Group controlId="Partners">
                <Form.Label style={{ fontWeight: "bold" }}>Partners</Form.Label>
                <Form.Control
                  as="select"
                  name="partner"
                  ref={register({
                    required: true,
                    validate: value => value !== "0",
                  })}
                  value={cbetPartner}
                  onChange={handleCbetPartnerChange}
                >
                  <option value="0">Select</option>
                  {partnersList.map(partner => {
                    return <option value={partner.name}>{partner.name}</option>
                  })}
                </Form.Control>
                <Form.Label style={{ color: "red" }}>
                  {errors.author && "* Partner is required"}
                </Form.Label>
              </Form.Group>
            ) : null}

            {/* Blog only */}
            {cbetContentCategory !== 3 ? (
              <React.Fragment>
                <Form.Group>
                  <Form.Label style={{ fontWeight: "bold" }}>Link</Form.Label>
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        IE: https://google.com
                      </Tooltip>
                    }
                  >
                    <Form.Control
                      type="text"
                      name="link"
                      value={link}
                      onChange={handleLink}
                      ref={register({
                        required: true,
                        validate: value => linkValidator.test(value) === true,
                      })}
                    ></Form.Control>
                  </OverlayTrigger>
                  <Form.Label style={{ color: "red" }}>
                    {errors.link && "* Valid Link is required"}
                  </Form.Label>
                </Form.Group>
              </React.Fragment>
            ) : null}

            {cbetContentCategory !== 2 ? (
              <React.Fragment>
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
              </React.Fragment>
            ) : null}

            {/* Blog Header image */}
            {cbetContentCategory === 3 ? (
              <React.Fragment>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Blog Header image
                </Form.Label>
                <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                  * Requires an image at 1440 x 300 pixels
                </Form.Label>
                <Form.Group
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <CbetDropzone
                    upload={uploadThumbnail}
                    complete={thumbnailUpload.length > 0}
                    editImageUrl={
                      props.location.state.cbetContent !== undefined
                        ? props.location.state.cbetContent.Thumbnail
                        : null
                    }
                  ></CbetDropzone>
                  <Form.Label style={{ color: "red" }}>
                    {errors.cbetDropzone && "* Blog Header image is required"}
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
              </React.Fragment>
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

              <Button
                onClick={() => {
                  console.log("errors", errors)
                }}
              >
                Errors
              </Button>
            </Form.Row>
          </Col>

          <Col md={8}>
            {/* Job description */}
            {cbetContentCategory === 1 ? (
              <React.Fragment>
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
                      active={featured === true}
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
                <Form.Group>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Job Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="description"
                    value={cbetDescription}
                    onChange={handleCbetDescription}
                    ref={register({ required: true })}
                  ></Form.Control>
                  <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                    {errors.description && "* Description is required"}
                  </Form.Label>
                </Form.Group>
              </React.Fragment>
            ) : null}
            {/* Event */}
            {cbetContentCategory === 2 ? (
              <Col>
                <Form.Row>
                  <Form.Group controlId="event dates">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Start Date
                    </Form.Label>
                    <CbetDatePicker
                      getDate={getStartDate}
                      defaultDate
                      initialDate={
                        props.location.state.cbetContent
                          ? props.location.state.cbetContent.StartDate
                          : null
                      }
                    />
                    <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                      {errors.startDate && "* Start date must be a valid date."}
                    </Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      End Date
                    </Form.Label>
                    <CbetDatePicker
                      getDate={getEndDate}
                      defaultDate
                      initialDate={
                        props.location.state.cbetContent
                          ? props.location.state.cbetContent.EndDate
                          : null
                      }
                    />
                    <Form.Label style={{ color: "red", marginLeft: "5px" }}>
                      {errors.endDate && "* End date must be a valid date."}
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
                  setContents={initialHtmlContents}
                  setOptions={{
                    height: "auto",
                    minHeight: 400,
                    buttonList: buttonList.complex,
                  }}
                />
              </Form.Group>
            ) : null}
            {/* Event */}
            {cbetContentCategory === 2 ? (
              <Col md={8}>
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
