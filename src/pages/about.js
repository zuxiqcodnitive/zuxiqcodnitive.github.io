import React from "react"
import ScrollToTop from "../components/scroll-to-top"
import SEO from "../components/seo"
import AboutContainer from "../containers/about"
import PageBanner from "../containers/global/page-banner"
import TestimonialReverse from "../containers/global/testimonial-reverse"
import ServiceListContainer from "../containers/service/service-list"
import TeamContainer from "../containers/global/team"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import Layout from "../layouts/index"

const AboutPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title="ZUXIQ CODNITIVE – About" />
        <div className="wrapper">
          <Header />
          <PageBanner
            title="About us"
            excerpt="We are a small company passionate about detail.
                     Small details that matter.
We are also passionate about automation, remove processes and dead tempos.
We will not charge you for extra details.

We invite you to give us processes that can be automated, so that you can focus on what you are best at.

What we are best at is design, reporting, coding. We are specific and dedicated.

Book us now for a quick run through our services and how it could make a difference to you."
            image="./images/banner/1.png"
          />
          {/* <AboutContainer /> */}
          <TeamContainer classOption="section-py" />
          <Footer />
          <ScrollToTop />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default AboutPage
