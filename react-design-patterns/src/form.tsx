import {withEditableUser} from './withEditableUser'
import {MouseEvent} from 'react'

type FormProps = {
  onChange: () => void
  onReset: () => void
  onSave: () => void
  user: {name: string; age: number; hairColor: string}
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
        <form>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              onChange={onChange}
              name="name"
              value={user.name}
            />
          </label>
          <label htmlFor="age">
            <input
              type="number"
              id="number"
              onChange={onChange}
              name="age"
              value={user.age}
            />
          </label>
          <label htmlFor="hairColor">
            <input
              type="text"
              id="hairColor"
              onChange={onChange}
              name="hairColor"
              value={user.hairColor}
            />
          </label>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSave}>Save form</button>
        </form>
      </>
    )
  },
  234,
)
