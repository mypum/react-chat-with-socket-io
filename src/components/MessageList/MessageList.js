import React, {PropTypes} from 'react'

const MessageList = ({messages}) => {
  return (
    <div>
      <h2>Conversation</h2>
      <ul>
        {
          messages.map((message, i) => {
            return (
              <li key={i}>{message.text}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList
