import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { Helmet } from "react-helmet"
import NavScrollTop from "./components/nav-scroll-top"
import HomePage from "./pages/index"
import AboutPage from "./pages/about"
import ServicePage from "./pages/service"
import ServiceDetails from "./templates/service-details"
import TeamPage from "./pages/team"
import ContactPage from "./pages/contact"
import ZuxiqCodnitiveIcon from "./assets/favicon.ico"
import "swiper/components/navigation/navigation.scss"
import "swiper/swiper.scss"
import "./assets/css/vendor/metropolis.css"
import "./assets/css/vendor/icofont.min.css"
import "./assets/css/vendor/font-awesome.css"
import "./assets/css/vendor/material-design-iconic.min.css"
import "./assets/css/plugins/animate.min.css"
import "./assets/scss/style.scss"

// meta constants
const siteUrl = `https://www.zuxiqcodnitive.com`
const siteName = "ZuxiqCodnitive"
const siteDesc =
  "ZuxiqCodnitive provides Full Solution for your Business Development"
// json Ld Scripts Seo
const orgScript = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZuxiqCodnitive",
  award: "",
  url: "https://www.zuxiqcodnitive.com",
  logo: "",
  sameAs: [],
}
const localBusinessScript = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZuxiqCodnitive",
  image: "",
  url: "https://www.zuxiqcodnitive.com",
  telephone: "+40730477641",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Campului 224 / 27, CLUJ-NAPOCA, CLUJ 400686",
    addressLocality: "Cluj-Napoca",
    postalCode: "400686",
    addressCountry: "Romania",
    addressRegion: "Cluj",
  },
  openingHours: ["Mo-Fr 10:00-19:00"],
  priceRange: "$, €",
}
const webSiteScript = {
  "@context": "https://schema.org",
  "@type": "ZuxiqCodnitive",
  name: "MedyPass",
  url: "https://www.zuxiqcodnitive.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.zuxiqcodnitive.com/search/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

const siteNavScript = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: ["Home"],
  url: ["https://www.zuxiqcodnitive.com"],
}

const renderMetaData = () => (
  <Helmet>
    <link rel="canonical" href={`${siteUrl}`} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_us" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:description" content={siteDesc} />
    <meta property="og:image" content={`${siteUrl}${ZuxiqCodnitiveIcon}`} />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
  </Helmet>
)

const renderJsonLdScripts = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(orgScript)}</script>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessScript)}
    </script>
    <script type="application/ld+json">{JSON.stringify(webSiteScript)}</script>
    <script type="application/ld+json">{JSON.stringify(siteNavScript)}</script>
  </Helmet>
)

const App = () => {
  return (
    <div>
      {renderMetaData()}
      {renderJsonLdScripts()}
      <Router>
        <NavScrollTop>
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL + "/"}`}
              exact
              component={HomePage}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/about"}`}
              component={AboutPage}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/service"}`}
              component={ServicePage}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/service-details/:id"}`}
              component={ServiceDetails}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/team"}`}
              component={TeamPage}
            />
            {/* <Route
            path={`${process.env.PUBLIC_URL + "/faq"}`}
            component={FaqPage}
          />*/}
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              component={ContactPage}
            />
            {/* <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={BlogPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-left-sidebar"}`}
            component={BlogLeftSidebarPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`}
            component={BlogRightSidebarPage}
          />*/}
            {/* <Route
            path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
            component={BlogDetailsPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/author/:author"}`}
            component={BlogAuthor}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/date/:date"}`}
            component={BlogDate}
          />*/}
            {/*<Route
            path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
            component={BlogTag}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
            component={BlogCategory}
          />*/}
          </Switch>
        </NavScrollTop>
      </Router>
    </div>
  )
}

export default App
