import React from 'react'
import '../assets/actionButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function ActionButtons() {
  return (
    <div className="actionButtons">
        <IconButton className="actionButtons__repeat">
            <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className='actionButtons__left'>
            <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton className='actionButtons__star'>
            <StarRateIcon fontSize="large"/>
        </IconButton>
        <IconButton  className='actionButtons__right'>
            <FavoriteIcon fontSize="large"/>
        </IconButton>
        <IconButton  className='actionButtons__light'>
            <FlashOnIcon fontSize="large"/>
        </IconButton>
    </div>
  )
}

export default ActionButtons