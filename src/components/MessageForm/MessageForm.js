import React, { Component, PropTypes } from 'react'

class MessageForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    let message = {
      user: this.props.user,
      text: this.state.text
    }

    this.props.onMessageSubmit(message)
    this.setState({ text: '' })
  }

  changeHandler (e) {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <div>
        <h3>Write New Message</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            value={this.state.text}
          />
        </form>
      </div>
    )
  }
}

MessageForm.propTypes = {
  onMessageSubmit: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
}

export default MessageForm
