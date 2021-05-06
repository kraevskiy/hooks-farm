import {useCallback, useState} from 'react'

export const AsyncStatus = {
  IDLE   : 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR  : 'error'
}

export function useAsync(asyncFunc) {
  const [ status, setStatus ] = useState(AsyncStatus.IDLE)
  const [ result, setResult ] = useState()
  const [ error, setError ]   = useState()

  const run = useCallback(() => {
    if (status === AsyncStatus.PENDING) {
      console.error('Still pending, cannot run again ...')
      return
    }

    setStatus(AsyncStatus.PENDING)
    asyncFunc()
      .then((res) => {
        setResult(res)
        setError(null)
        setStatus(AsyncStatus.SUCCESS)
      })
      .catch((err) => {
        setError(err)
        setStatus(AsyncStatus.ERROR)
      })
  }, [ status, asyncFunc ])

  return {run, status, result, error}
}
