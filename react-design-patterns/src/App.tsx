import {SplitScreen} from './SplitScreen'
import {Container} from './Container'
import {UserInfo} from './UserInfo'
import {CommentInfo} from './CommentInfo'
import {AlbumInfo} from './AlbumInfo'
import {withAlbums} from './withAlbums'
import {FormComponent} from './FormComponent'
import {FormComponentWithHooks} from './FormComponentWithHooks'
import {FormWidthRenderProps} from './RenderProps'
import {Modal} from './Modal'
import './App.css'

const LeftHandComponent = () => {
  return <h1>Left</h1>
}

const RightHandComponent = () => {
  return <h1>Right</h1>
}

export const getServerData = (url: string) => async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const initialData = {
  name: '',
  age: 0,
  hairColor: '',
}

function App() {
  const AlbumComponent = withAlbums(AlbumInfo)

  return (
    <div className="App">
      <h1>App</h1>
      <Modal>
        <h1>Hello Modal</h1>
      </Modal>
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
      <FormComponent />
      <FormComponentWithHooks />
      <FormWidthRenderProps />
      <Container
        getDataFunc={getServerData(
          'https://jsonplaceholder.typicode.com/users',
        )}
        resourceName="users"
      >
        <UserInfo />
      </Container>
      <Container
        getDataFunc={getServerData(
          'https://jsonplaceholder.typicode.com/comments',
        )}
        resourceName="comments"
      >
        <CommentInfo />
      </Container>
      <AlbumComponent />
    </div>
  )
}

export default App
