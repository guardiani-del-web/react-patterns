import React from 'react'

export type UserType = {
  id: number
  name: string
  username: string
  phone: string
  website: string
  email: string
  adress: {}
  company: {}
}

type UserProps = {
  user: UserType
}

export const User: React.FC<UserProps> = ({user}) => {
  return (
    <>
      User:
      {user.name}
    </>
  )
}
