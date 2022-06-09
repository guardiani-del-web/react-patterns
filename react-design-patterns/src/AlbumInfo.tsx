import React from 'react'
import { RegularList } from './RegularList'
import { Album, AlbumType } from './Album'

type AlbumInfoProps = {
	albums?: AlbumType[]
}

export const AlbumInfo = ({ albums }: AlbumInfoProps) => {
	return (
		<>
			<h1>List of Albums</h1>
			<RegularList items={albums} resoursname="album" component={Album} />
		</>
	)
}
