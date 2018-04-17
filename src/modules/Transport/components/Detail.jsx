import React, { Component } from "react"
import PropsTypes from "prop-types"
import "./detail.css"

class Detail extends Component {
  static propTypes = {
    status: PropsTypes.array
  }

  render() {
    const { status } = this.props
    if (status.length > 1) {
      return (
        <div className="detail">
          <h2>Service currently suffering disruptions</h2>
          <ul>
            {status.map((v, idx) => <li>{v["statusSeverityDescription"]}</li>)}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="detail">
          <h2>No Service Diruptions!</h2>
        </div>
      )
    }
  }
}

export default Detail
