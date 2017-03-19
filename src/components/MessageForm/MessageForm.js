import React, { Component, PropTypes } from 'react'
import s from './MessageForm.scss'

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
      <div className={s.container}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            onChange={this.changeHandler}
            value={this.state.text}
            placeholder="type something..."
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
