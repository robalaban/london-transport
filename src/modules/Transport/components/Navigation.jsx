import React, { Component } from "react"
import { connect } from "react-redux"
import PropsTypes from "prop-types"
import { bindActionCreators, compose } from "redux"
import { Container } from "semantic-ui-react"
import { fetchTfl } from "../actions"
import Detail from "./Detail"
import BikeCycle from "./BikeCycle"
import "./navigation.css"

import { Button, Icon } from "semantic-ui-react"

const Item = ({ ...props }) => (
  <Button
    onClick={(id, disruptions) => props.onClick(props.id, props.disruptions)}
  >
    {`${props.name}`}
    {props.nightly.includes(true) && (
      <Icon disabled name="circle notched" className="nightly--icon" />
    )}
    {props.status.includes(true) && (
      <Icon disabled name="warning" className="nightly--icon" />
    )}
  </Button>
)

const mapStateToProps = state => ({ transport: state.transport })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTfl }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Navigation extends Component {
  static propTypes = {
    fetchTfl: PropsTypes.func,
    transport: PropsTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      activeItem: null,
      disruptions: null
    }

    this.props.fetchTfl()
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 500)
  }

  handleItemClick = (id, status) => {
    if (!status.includes(true)) {
      this.setState({
        activeItem: id
      })
    }
    this.setState(
      {
        activeItem: id,
        status: status
      },
      () => console.log(this.state)
    )
  }

  handleCycleHire = () => {
    this.setState({
      activeItem: "cycle-hire"
    })
  }

  render() {
    const { activeItem } = this.state
    if (this.state.loaded) {
      const data = Object.values(this.props.transport.items)
      return (
        <Container className="container">
          {data.map((v, idx) => (
            <Item
              name={v["name"]}
              id={v["id"]}
              active={activeItem === v["id"]}
              nightly={v["serviceTypes"].map(v => v["name"] === "Night")}
              status={v["lineStatuses"].map(v => v["statusSeverity"] !== 10)}
              disruptions={v["lineStatuses"]}
              onClick={(id, disruptions) =>
                this.handleItemClick(id, disruptions)
              }
            />
          ))}
          <Item
            name="Cycle Hire"
            id="cycle-hire"
            nightly="false"
            status="false"
            onClick={id => this.handleCycleHire(id)}
          />

          {(() => {
            switch (this.state.activeItem) {
              case "cycle-hire":
                return <BikeCycle />
              case null:
                return null
              default:
                return <Detail status={this.state.status} />
            }
          })()}
        </Container>
      )
    } else {
      return <h4> Loading... </h4>
    }
  }
}

export default Navigation
