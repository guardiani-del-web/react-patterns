import React from 'react'
import { RegularList } from './RegularList'
import { Comment, CommentType } from './Comment'

type CommentInfoProps = {
	comments?: CommentType[]
}

export const CommentInfo: React.FC<CommentInfoProps> = ({ comments }) => {
	return (
		<div>
			<h1>List of Comments</h1>
			<RegularList items={comments} resoursname="comment" component={Comment} />
		</div>
	)
}
