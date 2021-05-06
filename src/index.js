import React        from 'react'
import ReactDOM     from 'react-dom'
import MasterDetail from './components/MasterDetail'
import {chapters}   from './hooks/Chapters'


ReactDOM.render(
  <React.StrictMode>
    <MasterDetail content={chapters}/>
  </React.StrictMode>,
  document.getElementById('root')
);
