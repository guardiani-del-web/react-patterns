import React from 'react'
import {RegularList} from './RegularList'
import {User, UserTypes} from './User'

type UserInfoProps = {
  users?: UserTypes[]
}

export const UserInfo: React.FC<UserInfoProps> = ({users}) => {
  console.log('users :', users)
  return (
    <div>
      <h1>List of Users</h1>
      <RegularList items={users} resoursname="user" component={User} />
    </div>
  )
}
