import {useCallback, useEffect, useRef, useState} from 'react'

export function useInterval(callback, delay) {
  const callbackRef                             = useRef(callback)
  const [ intervalHandler, setIntervalHandler ] = useState(null)
  const [ trigger, setTrigger ]                 = useState()

  useEffect(() => {
    callbackRef.current = callback
  }, [ callback ])

  useEffect(() => {
    const interval = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current()
      }
    }, delay)

    setIntervalHandler(interval)

    return () => {
      clearInterval(interval)
    }
  }, [ delay, trigger ])

  const isRunning = !!intervalHandler

  const stop = useCallback(()=>{
    if(intervalHandler){
      clearInterval(intervalHandler)
      setIntervalHandler(null)
    }
  }, [intervalHandler])

  const restart = useCallback(()=>{
    setTrigger({})
  }, [])

  return {
    isRunning,
    stop,
    restart
  }
}

