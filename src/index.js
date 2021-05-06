import React        from 'react'
import ReactDOM     from 'react-dom'
import MasterDetail from './components/MasterDetail'
import Ch_1         from './hooks/Ch_1'


const content = {
  ch_1: {
    name     : 'UseToggle',
    component: Ch_1
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MasterDetail content={content}/>
  </React.StrictMode>,
  document.getElementById('root')
);
