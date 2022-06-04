import React, {FC, useState, useEffect, MouseEvent} from 'react'
import {Form} from './Form'
import {FormUserType} from './FormComponent'
import axios from 'axios'
import {initialData} from './App'

type ChildProps = {
  children: any
  url: string
}

const EditableUser: FC<ChildProps> = ({children, url}) => {
  const [originalData, setOriginalData] = useState<FormUserType>(
    initialData as FormUserType,
  )
  const [data, setData] = useState<FormUserType>(initialData as FormUserType)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${url}`)
      const data = await response.json()
      setData(data)
      setOriginalData(data)
    }
    getUser()
  }, [])

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setData({...data, [e.currentTarget.name]: e.currentTarget.value})
  }

  const onReset = () => {
    setData(originalData)
  }

  const onSave = async () => {
    const response = await axios.post(`${url}`, {user: data})
    setData(response.data)
    setOriginalData(response.data)
  }

  return <>{children(data, onChange, onReset, onSave)}</>
}

export const FormWidthRenderProps = () => {
  return (
    <>
      <EditableUser url="/users/234">
        {(
          data: FormUserType,
          onChange: (e: React.FormEvent<HTMLInputElement>) => void,
          onReset: (e: MouseEvent<HTMLButtonElement>) => void,
          onSave: (e: MouseEvent<HTMLButtonElement>) => void,
        ) => (
          <>
            <Form
              user={data}
              onChange={onChange}
              handleReset={onReset}
              handleSave={onSave}
            />
          </>
        )}
      </EditableUser>
    </>
  )
}
