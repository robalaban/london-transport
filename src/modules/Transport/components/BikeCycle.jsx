import React, { Component } from "react"
import { Input, Button } from "semantic-ui-react"
import { connect } from "react-redux"
import PropsTypes from "prop-types"
import { bindActionCreators, compose } from "redux"
import { fetchBikePoints } from "../actions"

const mapStateToProps = state => ({ bike_points: state.bike_points })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBikePoints }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class BikeCycle extends Component {
  static propTypes = {
    fetchBikePoints: PropsTypes.func,
    bike_points: PropsTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      bike_value: "",
      points: null,
      error: false
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.bike_points.item !== null) {
      if (newProps.bike_points.item.data.length === 0) {
        this.setState({ error: true })
      }
      this.setState({ points: newProps.bike_points.item.data })
    }
  }

  handleSubmit = () => {
    this.setState({ error: false })
    this.props.fetchBikePoints(this.state.bike_value)
  }

  bikeValueChange = val => {
    this.setState({
      bike_value: val
    })
  }

  render() {
    if (this.state.points === null) {
      return (
        <div>
          <Input
            onChange={evt => {
              this.bikeValueChange(evt.target.value)
            }}
            placeholder="Search Bike Points..."
          />
          <Button onClick={this.handleSubmit}>Search</Button>
        </div>
      )
    } else if (this.state.error) {
      return <h2>No bike points found for {this.state.bike_value}</h2>
    } else {
      const data = this.state.points
      return (
        <ul>
          {data.map((v, idx) => (
            <li>
              {idx} - {v["commonName"]} (lat: {v["lat"]}, lon:{v["lon"]})
            </li>
          ))}
        </ul>
      )
    }
  }
}

export default BikeCycle
