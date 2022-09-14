import Home from './pages/Home/Home'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import './index.scss'
import { ScopedCssBaseline } from '@mui/material'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    )
  }
}
ReactDOM.render(
  <ScopedCssBaseline>
    <App />
  </ScopedCssBaseline>,
  document.getElementById('app-root')
)
