import React, { Component } from "react"
import Navigation from "./components/Navigation"
import { Container, Header } from "semantic-ui-react"
import "./transport.css"

class Transport extends Component {
  render() {
    return (
      <div className="transport">
        <Header className="transport--header">Medium Header</Header>
        <Navigation className="transport--navigation" />
      </div>
    )
  }
}

export default Transport
