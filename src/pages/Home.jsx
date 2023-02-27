import { Box } from '@mui/system'
import React from 'react'

import SideBar from '../components/SideBar'
import Content from '../components/Content'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <Box sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    }}>
        {/* SIDE BAR */}
        <SideBar />
        {/* SIDE BAR */}

        {/* CONTENT */}
        <Content />
        {/* CONTENT */}

        {/* PROFILE */}
        <Profile />
        {/* PROFILE */}
    </Box>
  )
}

export default Home