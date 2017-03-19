import React from 'react'
import io from 'socket.io-client'

import MessageForm from './MessageForm/MessageForm'
import MessageList from './MessageList/MessageList'

const socket = io()

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      messages: [],
      text: ''
    }
  }

  componentDidMount () {
    socket.emit('chat', 'Hello')
  }

  handleMessageSubmit (message) {
    let {messages} = this.state
    messages.push(message)
    this.setState({messages})
    socket.emit('send:message', message)
  }

  render () {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSubmit={this.handleMessageSubmit} />
      </div>
    )
  }
}
