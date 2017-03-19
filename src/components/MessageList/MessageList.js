import React, {PropTypes} from 'react'

const MessageList = ({messages}) => {
  return (
    <div>
      <h2>Conversation</h2>
      <ul>
        {
          messages.map((message, i) => {
            return (
              <li key={i}>
                {
                  message.user !== 'SYSTEM'
                  ? <strong>{message.user} :</strong>
                  : null
                }
                {
                  message.user !== 'SYSTEM'
                  ? <span>{message.text}</span>
                  : <span>{message.text}</span>
                }
              </li>
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
