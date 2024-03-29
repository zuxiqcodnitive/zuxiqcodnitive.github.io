import React from "react"
import ScrollToTop from "../components/scroll-to-top"
import SEO from "../components/seo"
import ContactContainer from "../containers/contact"
import PageBanner from "../containers/global/page-banner"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import Layout from "../layouts/index"

const ContactPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title="ZUXIQ CODNITIVE Contact" />
        <div className="wrapper">
          <Header />
          <PageBanner
            title="Contact us"
            excerpt=""
            image="./images/contact/1.webp"
          />
          <ContactContainer />
          <Footer />
          <ScrollToTop />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default ContactPage
