import React from 'react'
import {RegularList} from './RegularList'
import {User, UserType} from './User'

type UserInfoProps = {
  users?: UserType[]
}

export const UserInfo: React.FC<UserInfoProps> = ({users}) => {
  return (
    <div>
      <h1>List of Users</h1>
      <RegularList items={users} resoursname="user" component={User} />
    </div>
  )
}
