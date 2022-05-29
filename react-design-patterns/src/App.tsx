import {useState} from 'react'
import {SplitScreen} from './SplitScreen'
import {Container} from './Container'
import {UserInfo} from './UserInfo'
import {CommentInfo} from './CommentInfo'
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

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Modal>
        <h1>Hello Modal</h1>
      </Modal>
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
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
    </div>
  )
}

export default App
