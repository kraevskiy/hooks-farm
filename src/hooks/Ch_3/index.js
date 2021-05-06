import React, {memo, useState} from 'react'
import {useWhatCausedRender}   from './useWhatCausedRender'


const HeavyComponent = memo((props) => {
  useWhatCausedRender('HeavyComponent', props)

  return(
    <div>
      <div>Counter: {props.counter}</div>
      <div>Text: {props.text}</div>
    </div>
  )
})

const Ch_3 = () => {
  const [ counter, setCounter ] = useState(0)
  const [ text, setText ]       = useState('')

  const incrementCount = () => {
    setCounter(prevState => prevState + 1)
  }

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  const cleanLocalState = () => {
    setCounter(0)
    setText('')
  }

  return (
    <>
      <h2>UseWhatCausedRender</h2>
      <p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={cleanLocalState}>Clear local state</button>
      </p>
      <p>
        <input type="text" value={text} onChange={onTextChange}/>
      </p>
      <HeavyComponent counter={counter} text={text}/>
    </>
  )
}

export default Ch_3
