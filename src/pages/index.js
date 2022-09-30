import { Link } from "gatsby"
import React from "react"
import Header from '../components/header'
export default () => {

  // debugger
  // console.log(location.pathname)
  
  return (
    <div className="m-ain">
      <Header />
      <main className="container d-flex h-100 flex-column bg-white">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Careplus Documentation</h1>
          <p className="lead">
            The Careplus Documentation outlines  the various portals of Careplus Solution
            and how one can navigate through them using it
          </p>
        </div>
        <footer className="pt-4 mb-md-5 mt-md-auto pt-md-5 border-top">
          <Link target="_blank" to="https://sidmach.com">Sidmach technologies</Link> &#169; 2022
        </footer>
      </main>
    </div>
  )
}
