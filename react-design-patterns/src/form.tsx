import {FC, MouseEvent} from 'react'
import {FormUserType} from './FormComponent'
import {DangerButton, PrimaryButton} from './Buttons'
import styled from 'styled-components'

type FormProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  user: FormUserType
  handleReset: (e: MouseEvent<HTMLButtonElement>) => void
  handleSave: (e: MouseEvent<HTMLButtonElement>) => void
}

const FormContainer = styled.form`
  display: grid;
  place-items: center;
  gap: 10px;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const Input = styled.input`
  border: none;
  border: 1px solid blue;
  border-radius: 7px;
  padding: 7px;
`

export const Form: FC<FormProps> = ({
  onChange,
  user,
  handleReset,
  handleSave,
}) => {
  return (
    <>
      <FormContainer>
        <label htmlFor="name">
          <Input
            type="text"
            id="name"
            onChange={onChange}
            name="name"
            value={user.name}
          />
        </label>
        <label htmlFor="age">
          <Input
            type="number"
            id="number"
            onChange={onChange}
            name="age"
            value={user.age}
          />
        </label>
        <label htmlFor="hairColor">
          <Input
            type="text"
            id="hairColor"
            onChange={onChange}
            name="hairColor"
            value={user.hairColor}
          />
        </label>
        <ButtonsContainer>
          <DangerButton onClick={handleReset} text="Reset" />
          <PrimaryButton onClick={handleSave} text="Save Form" />
        </ButtonsContainer>
      </FormContainer>
    </>
  )
}
