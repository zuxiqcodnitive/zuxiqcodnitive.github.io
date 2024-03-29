import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { slugify } from "../../utils"

const ServiceBox = ({ data }) => {
  return (
    <div className="service-media">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + data.icon}
        alt=" service logo"
      />
      <div className="service-media-body">
        <h4 className="title">{data.title}</h4>
        <p>{data.excerpt}</p>
      </div>
    </div>
  )
}

ServiceBox.propTypes = {
  data: PropTypes.object,
}

export default ServiceBox
