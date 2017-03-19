import React from 'react'
import io from 'socket.io-client'

import MessageForm from './MessageForm/MessageForm'
import MessageList from './MessageList/MessageList'
import UserList from './UserList/UserList'

import s from './App.scss'

const socket = io()

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: '',
      users: [],
      messages: [],
      text: '',
      selfUser: ''
    }
  }

  componentDidMount () {
    socket.on('init', this._initialize)
    socket.on('send:message', this._messageRecieve)
    socket.on('user:join', this._userJoined)
    socket.on('user:left', this._userLeft)
  }

  _initialize = (data) => {
    var {users, name} = data
    this.setState({selfUser: name})
    this.setState({users, user: name})
  }

  _messageRecieve = (message) => {
    let {messages} = this.state
    messages.push(message)
    this.setState({messages})
  }

  _userJoined = (data) => {
    var {users, messages} = this.state
    var {name} = data
    users.push(name)
    messages.push({
      user: 'SYSTEM',
      text: name + ' Joined'
    })
    this.setState({users, messages})
  }

  _userLeft = (data) => {
    var {users, messages} = this.state
    var {name} = data
    var index = users.indexOf(name)
    users.splice(index, 1)
    messages.push({
      user: 'SYSTEM',
      text: name + ' Left'
    })
    this.setState({users, messages})
  }

  handleMessageSubmit = (message) => {
    let {messages} = this.state
    messages.push(message)
    this.setState({messages})
    socket.emit('send:message', message)
  }

  render () {
    return (
      <div className={s.container}>
        <UserList users={this.state.users} />
        <div className={s.msgbox}>
          <MessageList
            messages={this.state.messages}
            selfuser={this.state.selfUser}
          />
          <MessageForm
            onMessageSubmit={this.handleMessageSubmit}
            user={this.state.user}
          />
        </div>
      </div>
    )
  }
}
