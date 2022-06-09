import React from 'react'

export type CommentType = {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

type CommentProps = {
	comment: CommentType
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
	return (
		<>
			Comment:
			{comment.name} - {comment.email}
		</>
	)
}
