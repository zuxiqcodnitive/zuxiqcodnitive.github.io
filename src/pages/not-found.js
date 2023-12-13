import React from "react"
import ScrollToTop from "../components/scroll-to-top"
import SEO from "../components/seo"
import PageBanner from "../containers/global/page-banner"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import Layout from "../layouts/index"

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title="ZUXIQ CODNITIVE – Not Found" />
        <div className="wrapper">
          <Header />
          <PageBanner
            title="Oops! "
            excerpt=" It looks like you've wandered into uncharted territory."
            image="./images/banner/1.webp"
          />
          <Footer />
          <ScrollToTop />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage
