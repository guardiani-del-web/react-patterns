import React, { ComponentType, useState, useEffect } from 'react'
import axios from 'axios'
import { FormUserType } from './FormComponent'
import { initialData } from './App'
import { toast } from 'react-toastify'

export function withEditableUser<T>(
	EnhancedComponent: ComponentType<T>,
	id: number,
	sourceName: string
) {
	return (
		hocProps: Omit<T, 'onChange' | 'onReset' | 'onSave' | 'user' | 'sourceName'>
	) => {
		const [originalData, setOriginalData] = useState<FormUserType>(
			initialData as FormUserType
		)
		const [data, setData] = useState<FormUserType>(initialData as FormUserType)

		useEffect(() => {
			const getUser = async () => {
				const response = await fetch(`/${sourceName}/${id}`)
				const data = await response.json()
				setData(data)
				setOriginalData(data)
			}
			getUser()
		}, [])

		const onChange = (e: React.FormEvent<HTMLInputElement>) => {
			setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })
		}

		const onReset = () => {
			setData(originalData)
			toast('Successfully Reset')
		}

		const onSave = async () => {
			const response = await axios.post(`/${sourceName}/${id}`, { user: data })
			if (response.statusText === 'OK') {
				toast.success('Successfully Saved')
				setData(response.data)
				setOriginalData(response.data)
			} else {
				toast.error('Not succesfully Saved')
			}
		}

		return (
			<EnhancedComponent
				{...(hocProps as T)}
				onChange={onChange}
				onReset={onReset}
				onSave={onSave}
				user={data}
			/>
		)
	}
}
