import React from 'react'
import { useEditableUser } from './useEditableUser'
import { Form } from './Form'

export const FormComponentWithHooks = () => {
	const { state, onChange, onReset, onSave } = useEditableUser('/users/234')
	const { name, age, hairColor } = state

	return (
		<>
			<Form
				user={{ name, age, hairColor }}
				onChange={onChange}
				handleReset={onReset}
				handleSave={onSave}
			/>
		</>
	)
}
