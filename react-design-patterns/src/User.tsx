import React from 'react'

export type UserTypes = {
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
  user: UserTypes
}

export const User: React.FC<UserProps> = ({user}) => {
  return (
    <>
      User:
      {user.name}
    </>
  )
}
