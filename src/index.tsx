import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/components/Header'
import Sidebar from '../src/components/Sidebar'

import './index.scss'

export default class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Sidebar />
      </>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app-root')
)
