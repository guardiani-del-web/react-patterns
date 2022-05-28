import {useState} from 'react'
import {SplitScreen} from './SplitScreen'
import {Container} from './Container'
import {UserInfo} from './UserInfo'
import {Modal} from './Modal'
import './App.css'

const LeftHandComponent = () => {
  return <h1>Left</h1>
}

const RightHandComponent = () => {
  return <h1>Right</h1>
}

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Modal>
        <h1>Hello Modal</h1>
      </Modal>
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
      <Container>
        <UserInfo />
      </Container>
    </div>
  )
}

export default App
