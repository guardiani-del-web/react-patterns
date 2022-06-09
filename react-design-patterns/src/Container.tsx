import React, { useState, useEffect } from 'react'

interface Props {
	children: JSX.Element[] | JSX.Element
	getDataFunc: () => any
	resourceName: string
}

export const Container = ({ children, getDataFunc, resourceName }: Props) => {
	const [state, setState] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data = await getDataFunc()
			setState(data)
		}
		getData()
	}, [])

	return (
		<div>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child as React.ReactElement<any>, {
						[resourceName]: state,
					})
				}
				return child
			})}
		</div>
	)
}
