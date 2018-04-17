import React, { Component } from "react"
import { connect } from "react-redux"
import PropsTypes from "prop-types"
import { bindActionCreators, compose } from "redux"
import { Container } from "semantic-ui-react"
import { fetchTfl } from "../actions"
import Detail from "./Detail"
import "./navigation.css"

const Item = ({ ...props }) => (
  <div onClick={() => props.onClick(props.name)}>{`${props.name}`}</div>
)

const mapStateToProps = state => ({ transport: state.transport })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTfl }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@loader({ name: "transport", descriptor: "items" })
class Navigation extends Component {
  state = { activeItem: "home" }

  handleItemClick = name => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Container className="container">
        <ul>
          <Item
            name="home"
            active={activeItem === "home"}
            onClick={name => this.handleItemClick(name)}
          />
          <Item
            name="messages"
            active={activeItem === "messages"}
            onClick={name => this.handleItemClick(name)}
          />
          <Item
            name="bike points"
            active={activeItem === "bike points"}
            onClick={name => this.handleItemClick(name)}
          />
        </ul>
        <Detail />
      </Container>
    )
  }
}

export default Navigation
