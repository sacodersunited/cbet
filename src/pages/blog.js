import React, { useEffect, useState } from "react"
// import Slide from "react-reveal/Slide"
import Layout from "../components/careers/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import useJobs from "../hooks/use-jobs"
import useJobsBG from "../hooks/use-jobs-bg"
import useEvents from "../hooks/use-events"
import useCbetAuth from "../hooks/use-cbet-auth"
import JobsCarousel from "../components/careers/JobsCarousel.js"
import JobDetail from "../components/careers/JobDetail"
import { Container, Col, Row, Button, Image, Badge } from "react-bootstrap"

export default function Blog() {
  return (
    <Layout>
      <h1>AWESOME BLOG TITLE</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, at sequi totam ad fugiat dolore non necessitatibus eveniet ipsa illo minima corrupti modi vero! Unde facilis est pariatur quis? Iure!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dicta consequuntur perspiciatis, vero adipisci, laboriosam dolores omnis possimus est officia doloribus quia? Veritatis dolores sapiente perferendis a dolorem autem porro.s</p>
    </Layout>
  )
}
