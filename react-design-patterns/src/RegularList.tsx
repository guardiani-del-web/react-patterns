import React from 'react'
import {UserTypes} from './User'
import styled from 'styled-components'

const List = styled.div`
  list-style-type: none;
  padding-left: 0px;
`

type RegularListProps = {
  items?: UserTypes[]
  resoursname: string
  component: React.ElementType
}

export const RegularList: React.FC<RegularListProps> = ({
  items,
  resoursname,
  component: Component,
}) => {
  return (
    <>
      <List>
        {items?.map((item, index) => (
          <li key={index}>
            <Component {...{[resoursname]: item}} />
          </li>
        ))}
      </List>
    </>
  )
}
