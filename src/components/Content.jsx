import React from 'react'
import { useSelector } from 'react-redux'

import { Box } from '@mui/system'

import InstagramLogoLight from '../assets/instagram-logo-light.svg'
import InstagramLogoDark from '../assets/instagram-logo-dark.svg'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Masonry from '@mui/lab/Masonry';

import Post from './Post'



import Fox from '../assets/fox.png'
import Bird from '../assets/bird.png'
import Panda from '../assets/panda.png'
import Turtle from '../assets/turtle.png'
import Lizard from '../assets/lizard.png'
import Giraffa from '../assets/giraffa.png'
import { Label } from '@mui/icons-material'


const Content = () => {
    const { themeMode } = useSelector((state) => state.themeMode);

    const posts = [
        {
            id: 1,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Fox,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 2,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Bird,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 3,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Panda,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 4,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Turtle,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 5,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Lizard,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 6,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Giraffa,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 7,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Fox,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 8,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Bird,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 9,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Panda,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 10,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Turtle,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 11,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Lizard,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        },
        {
            id: 12,
            username: "Felipe Archanjo",
            location: "Campinas, SP, Brazil",
            image: Giraffa,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.",
            date: 'Wed, 26 January 2023'
        }
    ]

  return (
    <Box sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'background.primary',
        display: 'flex',
        flexDirection: 'column',
    }}>
        {/* TOP BAR */}
        <Box sx={{
            height: '10vh',
            width: '100%',
            backgroundColor: 'background.secondary',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #DEE6EE',
            '& > img': {
                marginLeft: { xs: '10px', md: '20px', lg: '40px'},
            },
            '& > div': {
                marginRight: { xs: '10px', md: '20px', lg: '40px'},
            }
        }}>
            <img src={themeMode === 'light' ? InstagramLogoLight : InstagramLogoDark} alt="Instagram Logo" />

                
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined"
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>,
                }}
                sx={{
                    width: { xs: '200px', md: '300px', lg: '400px'},
                    marginLeft: '20px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '24px',
                        height: '6vh',
                    },
                }}
            />
        </Box>
        {/* TOP BAR */}
        
        {/* POSTS */}
        <Box sx={{
            width: '100%',
            height: '90vh',
            backgroundColor: 'background.primary',
            overflowY: 'scroll',
            padding: '20px',
        }}>
            <Masonry 
                spacing={2}
                columns={{ sm: 1, md: 2, xl: 3 }}
            >
                {posts.map((post) => (
                    <Post key={post.id} userPost={post} />
                ))}
            </Masonry>
        </Box>
        {/* POSTS */}
    </Box>
  )
}

export default Content