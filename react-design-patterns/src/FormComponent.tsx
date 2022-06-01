import {withEditableUser} from './withEditableUser'
import {MouseEvent} from 'react'
import {Form} from './Form'

export type FormUserType = {
  name: string
  age: number
  hairColor: string
}

type FormProps = {
  onChange: () => void
  onReset: () => void
  onSave: () => void
  user: FormUserType
  sourceName: string
}

export const FormComponent = withEditableUser(
  ({onChange, onReset, onSave, user}: FormProps) => {
    const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onReset()
    }

    const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onSave()
    }

    return (
      <>
        <Form
          user={user}
          onChange={onChange}
          handleReset={handleReset}
          handleSave={handleSave}
        />
      </>
    )
  },
  234,
  'users',
)
