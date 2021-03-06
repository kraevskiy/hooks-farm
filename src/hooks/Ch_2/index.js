import {useCallback, useState} from 'react'
import {useEventListener}      from './useEventListener'

const Ch_2 = () => {
  const [ coords, setCoords ] = useState([])

  const onMouseMove = useCallback((event) => {
    console.log(event)
    const {
            clientX,
            clientY
          } = event

    const newPoint = {
      x: clientX,
      y: clientY
    }

    setCoords((array) => [ ...array, newPoint ])
  }, [])

  useEventListener('mousemove', onMouseMove)

  const onKeyDown = useCallback((event) => {
    if(event.key === 'Backspace'){
      setCoords([])
    }
  }, [])

  useEventListener('keydown', onKeyDown)

  return (
    <>
      <h2>UseEventListener</h2>
      {coords.map((point, index) => {
        const style = {
          position       : 'absolute',
          left           : point.x - 5,
          top            : point.y - 5,
          width          : 10,
          height         : 10,
          backgroundColor: '#F66',
          borderRadius   : 5
        }
        return <div key={index} style={style}/>
      })}
    </>
  )
}

export default Ch_2
