import React, {PropTypes} from 'react'
import ScrollArea from 'react-scrollbar'
import classNames from 'classnames/bind'

import s from './MessageList.scss'

let cx = classNames.bind(s)

const MessageList = ({messages, selfuser}) => {
  const renderItem = (message) => {
    if (message.user !== 'SYSTEM') {
      return (
        <div className={cx({self: message.user === selfuser})}>
          <div className={s.bubble}>
            {message.text}
          </div>
          <span className={s.username}>{message.user}</span>
        </div>
      )
    }

    return (
      <span className={s.textSystem}>{message.text}</span>
    )
  }
  return (

    <div className={s.container}>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
      >
        <div>
          {
            messages.map((message, i) => {
              return (
                <div key={i} className={cx('item', {itemself: message.user === selfuser})}>
                  {renderItem(message)}
                </div>
              )
            })
          }
        </div>
      </ScrollArea>
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  selfuser: PropTypes.string
}

export default MessageList
