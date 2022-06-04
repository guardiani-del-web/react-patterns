import {SplitScreen} from './SplitScreen'
import {Container} from './Container'
import {UserInfo} from './UserInfo'
import {CommentInfo} from './CommentInfo'
import {AlbumInfo} from './AlbumInfo'
import {withAlbums} from './withAlbums'
import {FormComponent} from './FormComponent'
import {FormComponentWithHooks} from './FormComponentWithHooks'
import {FormWidthRenderProps} from './RenderProps'
import styled from 'styled-components'
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

const FormsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1240px;
  margin: auto;
`

function App() {
  const AlbumComponent = withAlbums(AlbumInfo)

  return (
    <div className="App">
      <Wrapper>
        <h1>React Design Patterns</h1>
        <Modal>
          <h1>Hello Modal</h1>
        </Modal>
        <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
        <FormsContainer>
          <div>
            <h3>HOC</h3>
            <FormComponent />
          </div>
          <div>
            <h3>Hook</h3>
            <FormComponentWithHooks />
          </div>
          <div>
            <h3>Render Props</h3>
            <FormWidthRenderProps />
          </div>
        </FormsContainer>
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
      </Wrapper>
    </div>
  )
}

export default App
