import React, { createContext } from 'react'
import { ToastContainer as Toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastContext = createContext(null)

export const ToastContainer = ({ defaultMessage, children }: any) => {
	return (
		<>
			<ToastContext.Provider value={defaultMessage}>
				<Toast
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					icon={true}
					limit={1}
					transition={Flip}
				/>
				{children}
			</ToastContext.Provider>
		</>
	)
}
