import { Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';

const Copyright = (props: any) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/sakatajay111/react-boilerplate'>
        https://github.com/sakatajay111/react-boilerplate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
