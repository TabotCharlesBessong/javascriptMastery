
import React from 'react'
import useStyles from './Styles'

const Sidebar = ({children}) => {
  const classes = useStyles()
  return (
    <div>
      {children}
    </div>
  )
}

export default Sidebar
