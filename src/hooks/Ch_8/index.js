import {useState}    from 'react'
import {usePrevious} from './usePrevious'
import RateRow       from './RateRow'

const Ch_8 = () => {
  const [ score, setScore ] = useState(0)
  const previousScore       = usePrevious(score)

  return (
    <>
      <h2>UsePrevious</h2>
      <RateRow score={previousScore} />
      <RateRow score={score} onChange={setScore} />
    </>
  )
}

export default Ch_8
