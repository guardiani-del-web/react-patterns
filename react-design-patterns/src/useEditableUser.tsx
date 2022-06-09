import React, { useState, useEffect, MouseEvent } from 'react'
import { FormUserType } from './FormComponent'
import axios from 'axios'
import { initialData } from './App'
import { toast } from 'react-toastify'

export const useEditableUser = (url: string) => {
	const [originalData, setOriginalData] = useState<FormUserType>(
		initialData as FormUserType
	)
	const [state, setState] = useState<FormUserType>(initialData as FormUserType)

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(url)
			const data = await response.json()
			setState(data)
			setOriginalData(data)
		}
		getData()
	}, [])

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
	}

	const onReset = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setState(originalData)
		toast('Successfully Reset')
	}

	const onSave = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const response = await axios.post(url, { user: state })
		if (response.statusText === 'OK') {
			toast.success('Successfully Saved')
			setState(response.data)
			setOriginalData(response.data)
		} else {
			toast.error('Not succesfully Saved')
		}
	}

	return { state, onChange, onReset, onSave }
}
