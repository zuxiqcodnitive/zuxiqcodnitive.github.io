import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../components/logo"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top position-relative">
        <img
          className="footer-shape"
          src={process.env.PUBLIC_URL + "/images/footer/1.svg"}
          alt="shape"
        />
        <div className="container">
          <div className="row mb-n7">
            <div className="col-lg-3 col-sm-6 mb-7">
              <div className="footer-widget">
                <Logo
                  classOption="footer-logo mb-9 "
                  image={`${process.env.PUBLIC_URL}/images/logo/zuxiq-logo.png`}
                />
                <p />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-7 offset-xl-1">
              <div className="footer-widget text-right">
                <h4 className="title">Quick Link</h4>
                <ul className="footer-menu">
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + "/about"}
                    >
                      About us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + "/service"}
                    >
                      Pricing Plan
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + "/about"}
                    >
                      Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + "/blog"}
                    >
                      Blog Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + "/team"}
                    >
                      Our Clients
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + "/contact"}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-2 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Services</h4>
                <ul className="footer-menu">
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + `/service-details/2`}
                    >
                      Business Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + `/service-details/3`}
                    >
                      Creative Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + `/service-details/4`}
                    >
                      Branding{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + `/service-details/1`}
                    >
                      Digital Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + `/service-details/5`}
                    >
                      Marketing Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-link"
                      to={process.env.PUBLIC_URL + `/service-details/6`}
                    >
                      Campaign &amp; PR
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-3 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Contact info</h4>
                <p>Cluj-Napoca, Campului 242 / 27, Cluj</p>
                <ul className="address">
                  <li>
                    <a className="address-link" href="tel:+40730477641">
                      +40730477641
                    </a>
                  </li>
                  <li>
                    <a className="address-link" href="tel:+40723043817">
                      +40723043817
                    </a>
                  </li>
                  <li>
                    <a
                      className="address-link"
                      href="mailto:andreea@zuxiqcodnitive.com"
                    >
                      andreea@zuxiqcodnitive.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-info text-center">
                <p>
                  Copyright &copy; 2023 Made with{" "}
                  <i className="icofont-heart-alt" /> By ZUXIQ CODNITIVE , All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
