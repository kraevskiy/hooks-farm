import {useCallback, useEffect, useState} from 'react'
import {useEventListener}                 from '../Ch_2/useEventListener'

const DEFAULT_SIZE = {
  width : 0,
  height: 0
}

export function useElementSize(refElement) {
  const [ size, setSize ] = useState(DEFAULT_SIZE)

  const updateElementSize = useCallback(() => {
    const node = refElement.current
    if (node) {

      const {
              width,
              height
            } = node.getBoundingClientRect()

      setSize({
        width,
        height
      })
    }
  }, [ refElement ])

  useEffect(()=>{
    updateElementSize()
  }, [updateElementSize])

  useEventListener('resize', updateElementSize)

  return size
}

