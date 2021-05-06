import React        from 'react'
import ReactDOM     from 'react-dom'
import MasterDetail from './components/MasterDetail'


const content = {
  ch_1: {
    name     : '',
    component: ''
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MasterDetail content={content}/>
  </React.StrictMode>,
  document.getElementById('root')
);
