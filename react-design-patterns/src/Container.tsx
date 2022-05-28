import React, {useState, useEffect} from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const Container = ({children}: Props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }
    getData()
  }, [])

  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {users})
        }
        return child
      })}
    </div>
  )
}
