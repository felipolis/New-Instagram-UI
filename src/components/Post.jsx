import React from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'

import Heart from '../assets/heart.svg'
import Comment from '../assets/comment.svg'
import Share from '../assets/share.svg'
import Save from '../assets/save.svg'
import OtherPeople from '../assets/other-people.svg'

const Post = ({userPost}) => {
  return (
        <Card sx={{ 
            borderRadius: '20px',
            padding: '10px',
        }}>
            <CardHeader
                avatar={
                    <Avatar 
                        sx={{ width: 40, height: 40 }} 
                        src="/static/images/avatar/1.jpg"
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={userPost.username}
                subheader={userPost.location}
                sx={{
                    paddingX: '0px',
                }}
            />
            <CardMedia
                component="img"
                image={userPost.image}
                alt="media"
                sx={{
                    borderRadius: '10px',
                }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingX: '0px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: '20px',
                    }}>
                        <img src={Heart} alt="" />
                        <img src={Comment} alt="" />
                        <img src={Share} alt="" />
                    </Box>
                    <Box>
                        <img src={Save} alt="" />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography variant="body2">
                        Liked by <strong>felipe</strong> and <strong> others</strong>
                    </Typography>
                    <Box>
                        <img src={OtherPeople} alt="" />
                    </Box>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        color: 'text.primary',
                        marginBottom: '5px',
                    }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dignissimos fugiat id impedit commodi voluptatem explicabo architecto tenetur ab vel, aut dicta ex et mollitia minima est quasi dolore distinctio.
                    </Typography>
                    <Typography variant="body3" sx={{
                        color: 'text.secondary',
                    }}>
                        Wed, 26 January 2023
                    </Typography>
                </Box>
            </CardContent>
        </Card>
  )
}

export default Post