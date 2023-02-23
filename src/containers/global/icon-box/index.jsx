import React from "react"
import PropTypes from "prop-types"
import Button from "../../../components/button"
import IconBox from "../../../components/icon-box"
import SectionTitle from "../../../components/section-title"
import HomeData from "../../../data/home.json"

const IconBoxContainer = ({ classOption }) => {
  return (
    <div className={`feature-section position-relative ${classOption}`}>
      <img
        className="path-img"
        src={`${process.env.PUBLIC_URL}/images/feature/shape.png`}
        alt="images_not_found"
      />
      <div className="container custom-container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-6 col-lg-8 mx-auto mb-3 text-center">
            <SectionTitle
              classOption="title-section"
              subTitle="FEATURES"
              title="We are <span class='text-primary'>different</span> because..."
              excerptClassOption="mb-10"
              excerpt="We are different because we keep it simple. <br className='d-none d-xl-block' />
                       Simple enough to help you set up the solution and than teach you how you can do it yourself. <br className='d-none d-xl-block' />
                       No difficult twisted solutions. It will be easy and simple to understand. <br className='d-none d-xl-block' />
                       We want you to make progress and automate more, where it is possible."
            />
            <Button
              classOption="btn btn-lg btn-dark btn-hover-dark"
              text="Contact Us"
              path="/contact"
            />
          </div>

          <div className="col-12">
            <div id="grid" className="grid row mb-n7">
              {HomeData[2].iconBox &&
                HomeData[2].iconBox.map((single, key) => {
                  return <IconBox key={key} data={single} />
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

IconBoxContainer.propTypes = {
  classOption: PropTypes.string,
}

IconBoxContainer.defaultProps = {
  classOption: "section-pb",
}

export default IconBoxContainer
