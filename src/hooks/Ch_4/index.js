import {memo, useCallback, useEffect, useState} from 'react'
import {useEventListener}                       from '../Ch_2/useEventListener'
import {useDebounce}                            from './useDebounce'
import {useThrottle}                            from './useThrottle'

const SIZE = 10

const Point = memo(({
  left,
  top,
  color
}) => {
  return (
    <div style={{
      position       : 'absolute',
      left           : left - SIZE / 2,
      top            : top - SIZE / 2,
      width          : SIZE,
      height         : SIZE,
      borderRadius   : SIZE / 2,
      backgroundColor: color
    }}/>
  )
})

const INITIAL_POS = {
  clientX: 0,
  clientY: 0
}

const Ch_4 = () => {
  const [ lastPos, setLastPos ]             = useState(INITIAL_POS)
  const debouncePos                         = useDebounce(lastPos, 300)
  const throttledPos                        = useThrottle(lastPos, 300)
  const [ path, setPath ]                   = useState([])
  const [ debouncePath, setDebouncePath ]   = useState([])
  const [ throttledPath, setThrottledPath ] = useState([])

  useEventListener('mousemove', useCallback((event) => {
    const {
            clientX,
            clientY
          }   = event
    const pos = {
      clientX,
      clientY
    }
    setLastPos(pos)
    setPath(array => [ ...array, pos ])
  }, []))

  useEffect(() => {
    setDebouncePath(array => [ ...array, debouncePos ])
  }, [ debouncePos ])

  useEffect(() => {
    setThrottledPath(array => [ ...array, throttledPos ])
  }, [ throttledPos ])

  return (
    <>
      <h2>UseDebounce / useThrottle</h2>
      {path.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#F88"/>
      ))}
      {throttledPath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#8F8"/>
      ))}
      {debouncePath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#88F"/>
      ))}
    </>
  )
}

export default Ch_4
