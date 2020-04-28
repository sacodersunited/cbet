import React, { useEffect, useState } from "react"
// import Slide from "react-reveal/Slide"
import Layout from "../components/careers/layout"
import { FaClock } from "react-icons/fa"
import { Image, Badge, ResponsiveEmbed } from "react-bootstrap"
import useCbetAuth from "../hooks/use-cbet-auth"

export default function Blog() {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    // get data from GitHub api
    fetch(
      `https://cbetcontent.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [authContent])

  return (
    <>
      <Layout cbetContent={cbetContent} noCarousel>
        <h1>Lessons From the Trenches</h1>
        <section className="post-meta">
          <p>
            by Scott Hanselman posted on: 4/22/2020 <FaClock /> 1h ago
          </p>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, at sequi totam ad fugiat dolore non necessitatibus
          eveniet ipsa illo minima corrupti modi vero! Unde facilis est pariatur
          quis? Iure!
        </p>
        <Image
          src="https://i.picsum.photos/id/155/500/300.jpg"
          alt="train"
          fluid
        />
        <h2 className="mt-3">Officia Doloribus</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dicta
          consequuntur perspiciatis, vero adipisci, laboriosam dolores omnis
          possimus est officia doloribus quia? Veritatis dolores sapiente
          perferendis a dolorem autem porro.s
        </p>
        <h2>Vero Adipisci</h2>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Laborum ipsam quasi laudantium qui</li>
          <li>Suscipit nesciunt optio dignissimos</li>
        </ul>
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zpOULjyy-n8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ResponsiveEmbed>
      </Layout>
    </>
  )
}
