import { Button } from '@mui/material'
import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
      <section>
        <header>
          <div className='container'>
            <Button variant='contained'>Hello World</Button>
          </div>
        </header>
      </section>
    </>
  )
}
export default Header
