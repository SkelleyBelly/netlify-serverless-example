import React, { useCallback, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from "axios"

const IndexPage = () => {
  const [joke, setJoke] = useState(null)

  const getJoke = useCallback(() => {
    axios
      .get("./.netlify/functions/dad-joke")
      .then(({ data: { msg } }) => setJoke(msg))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Dad Jokes R Us</h1>
      <button onClick={getJoke} style={{margin: '8px'}}>Get joke from serverless function</button>
      <pre>
        {joke ?? "No joke yet"}
      </pre>
    </Layout>
  )
}

export default IndexPage
