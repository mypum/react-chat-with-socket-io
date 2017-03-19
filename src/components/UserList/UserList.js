import React, {PropTypes} from 'react'

import s from './UserList.scss'

const UserList = ({users}) => {
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h3 className={s.title}> {users.length} Online Users </h3>
      </div>
      <ul>
        {
          users.map((user, i) => {
            return (
              <li key={i} className={s.item}>
                {user}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList
