import React, {PropTypes} from 'react'

const MessageList = ({messages}) => {
  return (
    <div>
      <h2>Conversation</h2>
      <ul>
        {
          messages.map((msg, i) => {
            return (
              <li>{msg}</li>
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
