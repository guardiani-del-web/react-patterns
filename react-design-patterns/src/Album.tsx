export type AlbumType = {
  id: number
  title: string
  userId: number
}

type AlbumProps = {
  album: AlbumType
}

export const Album = ({album}: AlbumProps) => {
  return <div>{album.title}</div>
}
