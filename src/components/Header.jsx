import React from 'react'
import Person from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import '../assets/header.css';
function Header() {
  return (
    <div className='header-wrap'>
        <IconButton>
            <Person fontSize='large' className='header-icon'/>
        </IconButton>
        <a href="/"> 
            <img src="https://buggbear.com/assets/img/logo-color.png" alt="" className='header-logo'/>
        </a>
        <IconButton>
            <ForumIcon fontSize='large' className='header-icon'/>
        </IconButton>
    </div>
  )
}

export default Header