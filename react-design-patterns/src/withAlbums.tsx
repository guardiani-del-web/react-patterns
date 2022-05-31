import React, {useState, useEffect, ComponentType} from 'react'

export function withAlbums<T>(EnhancedComponent: ComponentType<T>) {
  return (hocProps: T) => {
    const [state, setState] = useState([])

    useEffect(() => {
      const getData = async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/albums',
        )
        const data = await response.json()
        setState(data)
      }
      getData()
    }, [])
    return <EnhancedComponent {...hocProps} albums={state} />
  }
}
