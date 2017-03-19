import React, {PropTypes} from 'react'

const UserList = ({users}) => {
  return (
    <div>
      <h3> {users.length} Online Users </h3>
      <ul>
        {
          users.map((user, i) => {
            return (
              <li key={i}>
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
