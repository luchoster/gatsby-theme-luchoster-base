import React from 'react'
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

export default () => (
  <header className="header">
    <AppBar />
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Hello</Typography>
      </Toolbar>
    </AppBar>
    <img
      src="https://lucho.dev/icons/icon-256x256.png"
      alt="Luchoster's logo"
      className="logo"
    />
  </header>
)
