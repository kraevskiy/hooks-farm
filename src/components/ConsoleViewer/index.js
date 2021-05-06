import {useEffect, useState, useRef} from 'react';
import {v4 as uuidv4}                from 'uuid';
import format                        from 'date-fns/format';
import cls                           from './style.module.css'

export function ConsoleViewer() {
  const [ messages, setMessages ] = useState([]);
  const footer                    = useRef();

  useEffect(() => {
    console.log = (message) => {
      const text =
              typeof message == 'object' ? JSON.stringify(message) : message;

      const newMessage = {
        id       : uuidv4(),
        text,
        timestamp: new Date().getTime(),
      };

      setMessages((prev) => [ ...prev, newMessage ]);
    };
  }, []);

  useEffect(() => {
    footer.current?.scrollIntoView();
  }, [ messages ]);

  const clear = () => {
    setMessages([]);
  };

  return (
    <div className={cls.consoleContainer}>
      <button className={cls.consoleClear} onClick={clear}>
        Clear
      </button>
      <div className={cls.consoleScroll}>
        {messages.map(({
          id,
          timestamp,
          text
        }) => (
          <div key={id}>
            <span className={cls.consoleTimestamp}>
              [{format(timestamp, 'HH:mm:ss')}]
            </span>{' '}
            {text}
          </div>
        ))}
        <div ref={footer} className={cls.consoleFooter}/>
      </div>
    </div>
  );
}
