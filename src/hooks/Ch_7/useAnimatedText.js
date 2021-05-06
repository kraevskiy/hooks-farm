import {useEffect, useState} from 'react'

export function useAnimatedText(text, delay) {
  const [ currentPos, setCurrentPos ] = useState(0)

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setCurrentPos((pos) => {
        const isLast = pos === text.length - 1
        return isLast ? 0 : pos + 1
      })
    }, delay)

    return () => {
      clearInterval(intervalHandle)
    }
  }, [ text, delay ])

  return text.substring(0, currentPos)
}
