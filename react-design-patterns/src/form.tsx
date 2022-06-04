import {FC, MouseEvent} from 'react'
import {FormUserType} from './FormComponent'
import {
  Button,
  DangerButton,
  PrimaryButton,
  SmallSuccessButton,
  PrimaryButtonPartial,
  SecondaryButtonPartial,
} from './Buttons'

type FormProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  user: FormUserType
  handleReset: (e: MouseEvent<HTMLButtonElement>) => void
  handleSave: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Form: FC<FormProps> = ({
  onChange,
  user,
  handleReset,
  handleSave,
}) => {
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
        <DangerButton onClick={handleReset} text="Reset" />
        <PrimaryButton onClick={handleSave} text="Save Fomr" />
      </form>
    </>
  )
}
