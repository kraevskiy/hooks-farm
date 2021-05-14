import {memo, useCallback, useRef, useState} from 'react'
import {useElementSize}                      from '../Ch_10/useElementSize'
import {v4 as uuid}                    from 'uuid'
import {useInterval}                   from './useInterval'
import './style.css'

const PALETTE  = [ '#23d696', '#fd743a', '#c293df', '#d6ef3d', '#ba1d44' ];
const MIN_SIZE = 10;
const MAX_SIZE = 40;

function getRandomElement(array) {
  const index = Math.round(Math.random() * array.length);
  return array[index];
}

const Particle = memo(({ left, top, speed, color, size }) => {
  const style = {
    position: 'absolute',
    left,
    top,
    width: size,
    height: size,
    backgroundColor: color,
    animation: `spin ${speed}s linear infinite`,
  };
  return <div style={style} />;
});

const Ch_11 = () => {
  const [ particles, setParticles ] = useState([])
  const spawnAreaRef                = useRef()
  const areaSize                    = useElementSize(spawnAreaRef)
  const maxLeft                     = areaSize.width - MAX_SIZE
  const maxTop                      = areaSize.height - MAX_SIZE

  const spawnParticle = useCallback(() => {
    setParticles((array) => {
      const newItem = {
        id: uuid(),
        left: Math.random() * maxLeft,
        top: Math.random() * maxTop,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        speed: Math.random() * 10,
        color: getRandomElement(PALETTE)
      }
      return [...array, newItem]
    })
  }, [ maxLeft, maxTop ])

  const {isRunning, stop, restart} = useInterval(spawnParticle, 500)

  const stopSpawning = () => {
    stop();
  };

  const resumeSpawning = () => {
    restart();
  };

  return (
    <>
      <h2>useInterval</h2>
      {isRunning ? (
        <button onClick={stopSpawning}>STOP</button>
      ) : (
        <button onClick={resumeSpawning}>RESUME</button>
      )}
      <div className="spawnArea" ref={spawnAreaRef}>
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>
    </>
  )
}

export default Ch_11
