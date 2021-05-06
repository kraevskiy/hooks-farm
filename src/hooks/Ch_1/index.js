import React       from 'react'
import {useToggle} from './UseToggle'

function ToggleButton({
  toggled,
  handleToggle
}) {
  const caption = toggled ? 'ON' : 'OFF'

  return (
    <button style={{width: 100}} onClick={handleToggle}>
      {caption}
    </button>
  )
}

function SettingToggle({
  label,
  initialValue
}) {
  const [ isEnabled, toggleEnabled ] = useToggle(initialValue)
  return (
    <div style={{margin: 10}}>
      <ToggleButton toggled={isEnabled} handleToggle={toggleEnabled}/>
      <span style={{marginLeft: 10}}>{label}</span>
    </div>
  )
}

const Ch_1 = () => {
  return (
    <>
      <h2>UseToggle</h2>
      <SettingToggle label="Audio enabled" initialValue={true}/>
      <SettingToggle label="Video enabled" initialValue={true}/>
    </>
  )
}

export default Ch_1
