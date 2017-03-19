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
          <strong>{message.user} :</strong>
          <span>{message.text}</span>
        </div>
      )
    }

    return (
      <span>{message.text}</span>
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
  messages: PropTypes.array.isRequired
}

export default MessageList
