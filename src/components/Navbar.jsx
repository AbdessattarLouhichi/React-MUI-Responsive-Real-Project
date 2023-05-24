import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Mail, Notifications, Spa } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"

})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius ,
  width: "40%",
}))

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  },
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  },
}))


function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs: "none", sm: "block"}}} >My App</Typography>
        <Spa sx={{display:{ xs: "block", sm: "none"}}} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={6} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30, height: 30}} 
            alt="Travis Howard" 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
            onClick={e => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=> setOpen(true)}>
          <Avatar sx={{width:30, height: 30}} alt="Travis Howard" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar