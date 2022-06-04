import React, {useState} from 'react'
import styled from 'styled-components'
import {PrimaryButtonPartial, TerciaryButtonPartial} from './Buttons'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`

interface ModalProps {
  children: JSX.Element[] | JSX.Element
}

export const Modal: React.FC<ModalProps> = ({children}) => {
  const [shouldShow, setShouldShow] = useState(false)

  return (
    <>
      <PrimaryButtonPartial
        onClick={() => setShouldShow(true)}
        text="Show Modal"
      />
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={e => e.stopPropagation()}>
            <TerciaryButtonPartial
              onClick={() => setShouldShow(false)}
              text="Hide Modal"
            />
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  )
}
