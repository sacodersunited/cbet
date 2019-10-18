import React, { Component } from "react"
import { Card, Button } from "react-bootstrap"

export default class TestimonialCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  showTestimonial = () => {
    this.setState({
      isEmptyState: !this.state.isEmptyState,
    })
  }

  render() {
    return (
      // todo: fix maxWidth to match a viewport width correctly.
      <Card {...this.props} style={{ maxWidth: "380.41px" }}>
        <Card.Img
          variant="top"
          src={`profile-${this.props.index + 1}.png`}
          style={{ minHeight: "320px" }}
          alt="biomedical technology school /biomedical college /biomedical training
/online biomedical college /Online biomedical training /online biomedical technology
school"
        />
        <Card.Body>
          <Card.Title>{this.props.person.name}</Card.Title>
          <Card.Text className="mt-0 mb-0 font-weight-bold">
            {this.props.person.type}
          </Card.Text>
          <Card.Text className="mt-0 mb-0 text-muted">
            {this.props.person.date}
          </Card.Text>
          <Card.Text className="mt-0 mb-3 font-italic">
            {this.props.person.state}
          </Card.Text>
          {this.state.isEmptyState && (
            <>
              <Card.Text style={{ minHeight: "200px" }}>
                {this.props.person.comment.substring(0, 230)}...
              </Card.Text>
              <Button
                className="text-uppercase"
                variant="primary"
                block
                onClick={this.showTestimonial}
              >
                Learn More
              </Button>
            </>
          )}
          {!this.state.isEmptyState && (
            <>
              <Card.Text style={{ minHeight: "300px" }}>
                {this.props.person.comment}
              </Card.Text>
              <Button
                className="text-uppercase"
                variant="primary"
                block
                onClick={this.showTestimonial}
              >
                Show Less
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    )
  }
}
