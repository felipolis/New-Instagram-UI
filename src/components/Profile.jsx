import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Notification from '../assets/notification.svg'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import featured from '../assets/featured.png'
import india from '../assets/india.png'
import paris from '../assets/paris.png'
import food from '../assets/food.png'
import hooman from '../assets/hooman.png'
import travel from '../assets/travel.png'

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { themeModes } from "../configs/theme.configs";
import { setThemeMode } from "../redux/features/themeModeSlice";

const Profile = () => {
    const { themeMode } = useSelector((state) => state.themeMode);
    const dispatch = useDispatch();

    const onSwitchTheme = () => {
        const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
        dispatch(setThemeMode(theme));
      };

  return (
    <Box sx={{
        height: '100vh',
        width: { xs: '400px', md: '500px', lg: '650px'},
        backgroundColor: 'background.secondary',
        borderLeft: '1px solid #DEE6EE',
        display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex'},
        flexDirection: 'column',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    }}>
        <Box sx={{
            width: '100%',
            height: '10vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}>
            <Box onClick={onSwitchTheme} sx={{
                width: '40px',
                height: '40px',
                backgroundColor: 'background.primary',
                borderRadius: '50%',
                marginRight: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                '& > *': {
                    width: '20px',
                    color: 'text.primary',
                }
            }}>
                {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
                {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
            </Box>
            <Box sx={{
                width: '40px',
                height: '40px',
                backgroundColor: 'background.primary',
                borderRadius: '50%',
                marginRight: '30px',
                display: 'flex',
                cursor: 'pointer',
                justifyContent: 'center',
                alignItems: 'center',
                '& > img': {
                    width: '20px',
                }
            }}>
                <img src={Notification} alt="notification" />
            </Box>
        </Box>

        <Box sx={{
            display: 'flex',
            height: '90vh',
            paddingX: '40px',
            flexDirection: 'column',
            //backgroundColor: 'red',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Avatar */}
                <Avatar 
                    sx={{ width: 80, height: 80 }} 
                    src="/static/images/avatar/1.jpg"
                />
                {/* Avatar */}

                {/* Name & Subtitle*/}
                <Typography 
                    variant="h6" 
                    sx={{ 
                        fontWeight: 'bold', 
                        marginTop: '20px' ,
                        color: 'text.primary',
                    }}>
                    Felipe Archanjo
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        color: 'text.secondary', 
                        marginBottom: '10px' 
                    }}>
                        @felipearchanjo
                </Typography>
                {/* Name & Subtitle*/}

                {/* BUTTON EDIT */}
                <Button variant="contained" disableElevation sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    paddingX: '30px',
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    }
                }}>
                    Edit
                </Button>
                {/* BUTTON EDIT */}
            </Box>


            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px',
            }}>
                {/* POSTS / FOLLOWERS / FOLLOWEINGS */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography variant="h6" fontSize={15} sx={{ fontWeight: 'bold', color: 'text.primary',}}>
                        256
                    </Typography>
                    <Typography variant="subtitle1" fontSize={10} sx={{ color: 'text.secondary' }}>
                        Posts
                    </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary',}}>
                    .
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography variant="h6" fontSize={15} sx={{ fontWeight: 'bold', color: 'text.primary',}}>
                        3.5K
                    </Typography>
                    <Typography variant="subtitle1" fontSize={10} sx={{ color: 'text.secondary' }}>
                        Followers
                    </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary',}}>
                    .
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography variant="h6" fontSize={15} sx={{ fontWeight: 'bold', color: 'text.primary',}}>
                        900
                    </Typography>
                    <Typography variant="subtitle1" fontSize={10} sx={{ color: 'text.secondary' }}>
                        Following
                    </Typography>
                </Box>
                {/* POSTS / FOLLOWERS / FOLLOWEINGS */}
            </Box>

            {/* BIO */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
            }}>
                {/* titulo */}
                <Typography variant="h6" fontSize={15} sx={{ fontWeight: 'bold', marginTop: '20px', color: 'text.primary', }}>
                    About
                </Typography>
                {/* titulo */}
                {/* bio */}
                <Typography 
                    variant="subtitle1" 
                    fontSize={14} 
                    align='justify' 
                    sx={{ 
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        color: 'text.secondary', 
                        marginTop: '10px' 
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam corporis beatae sequi tenetur inventore obcaecati, molestias quia, molestiae perspiciatis, deleniti optio fugit iusto unde doloribus cupiditate? Error, magnam at?
                </Typography>
                {/* bio */}
                {/* link */}
                <Typography variant="subtitle1" fontSize={14} sx={{ color: 'lightblue', marginTop: '10px', cursor: 'pointer' }}>
                    https://felipearchanjo.com
                </Typography>
                {/* link */}
            </Box>
            {/* BIO */}

            {/* STORIES */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
            }}>
                <Typography variant="h6" fontSize={15} sx={{ fontWeight: 'bold', marginTop: '20px', color: 'text.primary', }}>
                    Your Stories
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Avatar
                            sx={{ width: 60, height: 60, marginTop: '10px' }}
                            src={featured}
                        />
                        <Typography variant="subtitle1" fontSize={11} sx={{ color: 'text.secondary', marginTop: '10px', fontWeight: 'bold' }}>
                            Featured
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Avatar
                            sx={{ width: 60, height: 60, marginTop: '10px' }}
                            src={india}
                        />
                        <Typography variant="subtitle1" fontSize={11} sx={{ color: 'text.secondary', marginTop: '10px', fontWeight: 'bold' }}>
                            India
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Avatar
                            sx={{ width: 60, height: 60, marginTop: '10px' }}
                            src={paris}
                        />
                        <Typography variant="subtitle1" fontSize={11} sx={{ color: 'text.secondary', marginTop: '10px', fontWeight: 'bold' }}>
                            Paris
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Avatar
                            sx={{ width: 60, height: 60, marginTop: '10px' }}
                            src={food}
                        />
                        <Typography variant="subtitle1" fontSize={11} sx={{ color: 'text.secondary', marginTop: '10px', fontWeight: 'bold' }}>
                            Food
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Avatar
                            sx={{ width: 60, height: 60, marginTop: '10px' }}
                            src={hooman}
                        />
                        <Typography variant="subtitle1" fontSize={11} sx={{ color: 'text.secondary', marginTop: '10px', fontWeight: 'bold' }}>
                            Hooman
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Avatar
                            sx={{ width: 60, height: 60, marginTop: '10px' }}
                            src={travel}
                        />
                        <Typography variant="subtitle1" fontSize={11} sx={{ color: 'text.secondary', marginTop: '10px', fontWeight: 'bold' }}>
                            Travel
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* STORIES */}

            {/* CREATE POST */}
            {/* botão com cor linear do rosa ao laranja */}
            <Button
                variant="contained"
                sx={{
                    width: '100%',
                    height: '40px',
                    marginTop: '20px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    borderRadius: '5px',
                }}
            >
                Create Post
            </Button>

            {/* CREATE POST */}
        </Box>
    </Box>
  )
}

export default Profile