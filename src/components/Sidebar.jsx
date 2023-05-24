import { AccountBox, Article, Groups, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar({mode, setMode}) {
  return (
    <Box  flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}} >
      <Box position= "fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#pagesList' >
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="PagesList" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#groups' >
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#marketplace' >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marquetplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#friends' >
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#setting' >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile' >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#mode' >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}  />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar