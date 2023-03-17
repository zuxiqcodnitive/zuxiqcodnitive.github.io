import React from "react"
import PropTypes from "prop-types"
import Button from "../../../components/button"
import SectionTitle from "../../../components/section-title"
import Team from "../../../components/team"
import HomeData from "../../../data/home.json"

const TeamContainer = ({ classOption }) => {
  return (
    <div className={`team-section overflow-hidden ${classOption}`}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="team-content-wrap">
              <SectionTitle
                classOption="title-section"
                subTitle=""
                title="People, <span class='text-primary'>Behind</span> the Screen"
                excerptClassOption="mb-5"
                excerpt="We are a team of open-minded, dynamic and with a problem-solving mindset.<br/>
                         We have deep skill sets within web developing (full-stack), analysing & reporting, QA and Project
                         Management.<br/>
                         We dedicate fully to our customer's solution and we focus on details and different perspectives.<br/>
                         Get in touch with us by e-mail or call us. We want to meet with you in person.<br/>
                         We are unconventionally not linked to social media.<br/>
                         Let's get started."
              />
              {/* <Button
                classOption="btn btn-lg btn-dark btn-hover-dark"
                text="View more"
                path="/team"
              /> */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="new-team-members">
              {HomeData[5].team &&
                HomeData[5].team.map((single, key) => {
                  return <Team key={key} data={single} />
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TeamContainer.propTypes = {
  classOption: PropTypes.string,
}

TeamContainer.defaultProps = {
  classOption: "section-pb",
}

export default TeamContainer
