import React, { Component } from "react"
import { Container } from "semantic-ui-react"
import Detail from "./Detail"
import "./navigation.css"

const Item = ({ ...props }) => (
  <div onClick={() => props.onClick(props.name)}>{`${props.name}`}</div>
)

class Navigation extends Component {
  state = { activeItem: "home" }

  handleItemClick = name => {
    this.setState({ activeItem: name }, () => console.log(this.state))
  }

  render() {
    const { activeItem } = this.state
    console.log(this.state)
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
