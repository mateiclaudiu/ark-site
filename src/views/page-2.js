"use client"

import React from "react"
import Link from "next/link"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link href="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
