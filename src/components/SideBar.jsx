import { Box } from '@mui/system'
import React from 'react'

import HomeIcon from '../assets/home-icon.svg'
import ChatIcon from '../assets/chat-icon.svg'
import ExploreIcon from '../assets/explore-icon.svg'
import FavoritesIcon from '../assets/favorites-icon.svg'
import VideosIcon from '../assets/videos-icon.svg'
import TvIcon from '../assets/tv-icon.svg'
import SaveIcon from '../assets/save-icon.svg'
import SettingsIcon from '../assets/settings-icon.svg'

const SideBar = () => {
  return (
    <Box sx={{
        height: '100vh',
        width: { xs: '90px', md: '100px', lg: '140px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'background.secondary',
        borderRight: '1px solid #DEE6EE',
    }}>
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginTop: '100px',
            '& > img': {
                cursor: 'pointer',
                width: { xs: '30px', md: '40px', lg: '50px'},
                marginX: '10px',
            },
        }}>
            <img src={HomeIcon} alt="Home Icon"/>

            <img src={ExploreIcon} alt="Explore Icon" />

            <img src={FavoritesIcon} alt="Favorites Icon" />

            <img src={VideosIcon} alt="Videos Icon" />

            <img src={TvIcon} alt="Tv Icon" />

            <img src={SaveIcon} alt="Save Icon" />

        </Box>

        <Box sx={{
            marginBottom: '40px',
            '& > img': {
                cursor: 'pointer',
                width: { xs: '10px', md: '20px', lg: '30px'}
            },
        }}>
            <img src={SettingsIcon} alt="settings" />
        </Box>
    </Box>
  )
}

export default SideBar