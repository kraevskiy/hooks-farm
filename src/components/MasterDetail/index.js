import {useEffect, useState} from 'react'
import cls                   from './style.module.css'
import {ConsoleViewer}       from '../ConsoleViewer'

const MasterDetail = ({content}) => {
  const [ chapterId, setChapterId ] = useState('')
  const selectedChapter             = chapterId ? content[chapterId] : null
  const Detail                      = selectedChapter?.component
  const entries                     = Object.entries(content)

  useEffect(() => {
    document.title = content[chapterId]?.name ?? 'React Hooks Farm'
  }, [ chapterId, content ])

  return (
    <div className={cls.container}>
      <div className={cls.master}>
        {entries.map(([ key, value ]) => {
          const isSelected = chapterId === key
          const className  = isSelected ? [ cls.masterButton, cls.selected ].join(' ') : cls.masterButton
          return (
            <div key={key}>
              <button className={className} onClick={() => setChapterId(key)}>
                {value.name}
              </button>
            </div>
          )
        })}
      </div>
      <div className={cls.detail}>
        {Detail ? <Detail/> : null}
      </div>
      <div className={cls.bottom}>
        <ConsoleViewer />
      </div>

    </div>
  )
}

export default MasterDetail
