import React, {ComponentType, useState, useEffect} from 'react'
import axios from 'axios'

export function withEditableUser<T>(
  EnhancedComponent: ComponentType<T>,
  id: number,
) {
  return (hocProps: Omit<T, 'onChange' | 'onReset' | 'onSave' | 'user'>) => {
    const [originalUser, setOriginalUser] = useState({
      name: '',
      age: '',
      hairColor: '',
    })
    const [user, setUser] = useState({name: '', age: '', hairColor: ''})

    useEffect(() => {
      const getUser = async () => {
        const response = await fetch(`/users/${id}`)
        const user = await response.json()
        setUser(user)
        setOriginalUser(user)
      }
      getUser()
    }, [])

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      setUser({...user, [e.currentTarget.name]: e.currentTarget.value})
    }

    const onReset = () => {
      setUser(originalUser)
    }

    const onSave = async () => {
      const response = await axios.post(`/users/${id}`, {user})
      setUser(response.data)
      setOriginalUser(response.data)
    }

    return (
      <EnhancedComponent
        {...(hocProps as T)}
        onChange={onChange}
        onReset={onReset}
        onSave={onSave}
        user={user}
      />
    )
  }
}
