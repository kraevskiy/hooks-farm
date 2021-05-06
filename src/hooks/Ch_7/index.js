import {AsyncStatus, useAsync} from './useAsync'
import {useAnimatedText}       from './useAnimatedText'

function requestRandomNumber() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      const randomNumber = Math.random() * 100
      if (randomNumber > 50) {
        resolve(randomNumber)
      } else {
        rejects('Maybe later')
      }
    }, 3000)
  })
}

function AnimatedText({text}) {
  const currentText = useAnimatedText(text, 50)
  return <p>{currentText}</p>
}

const Ch_7 = () => {
  const {
          run,
          status,
          result,
          error
        } = useAsync(requestRandomNumber)

  return (
    <>
      <h2>UseAsync / UseAnimatedText</h2>
      {status === AsyncStatus.IDLE ? (
        <button onClick={run}>Request</button>
      ): status === AsyncStatus.PENDING ? (
        <AnimatedText text="Request in progress..."/>
      ) : status === AsyncStatus.SUCCESS ? (
        <>
          <button onClick={run}>Request</button>
          <p>Current number: {result}</p>
        </>
      ) : (
        <>
          <button onClick={run}>Run again</button>
          <p style={{color: 'red'}}>
            <b>Error:</b> {error}
          </p>
        </>
      )}
    </>
  )
}

export default Ch_7
