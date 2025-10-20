import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent className='rounded-5'>
            
            <Typography className='text-center text-decoration-underline' variant="h5" component="div">
                Admin-portal
            </Typography>
            <Typography className='mt-4 text-center' variant="body2">
                Resource-sharing moderator, where the admin reviews user-submitted resource requests and either approves or rejects them.
                <br />
                
            </Typography>
        </CardContent>
        <CardActions>
            <Link to = {"/admin"}><Button size="small">Learn More</Button></Link>
        </CardActions>
    </React.Fragment>
);

const card1 = (
    <React.Fragment>
        <CardContent className='rounded-5'>
            
            <Typography className='text-center text-decoration-underline' variant="h5" component="div">
                User-portal
            </Typography>
            <Typography className='mt-4 text-center' variant="body2">
                Resource request platform, allowing users to submit titles and descriptions of study materials or resources they need.
                
            </Typography>
        </CardContent>
        <CardActions>
            <Link to = {"/user"}><Button size="small">Learn More</Button></Link>
        </CardActions>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <CardContent className='rounded-5'>
            
            <Typography className='text-center' variant="h5" component="div">
                Lend a Book
            </Typography>
            <Typography className='mt-4 text-center' variant="body2">
                Borrow or lend books within your community. Save money and spread knowledge.
                <br />
                
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);


function Landing() {
    return (
        <>
            {/* home section */}
            <section id='home_page'>
                <div >
                    {/* landing */}
                    <div className='d-flex align-items-center  flex-column pt-5 ' style={{ backgroundColor: "#1e1e24", height: "30rem", overflowX: 'hidden' }}>
                        <h1 style={{ fontFamily: `"Bitcount Prop Single Ink", system-ui`, fontSize: '4rem' }} className='pt-5 '>From Community, For Community.</h1>
                        <div className='w-50'><h4 style={{ color: '#B284BE' }}>Easily share or borrow tools, books, or skills in your local community. Save money, reduce waste, and help others.</h4></div>
                        <button className='mt-3 px-1 rounded ' style={{ backgroundColor: "#1e1e24", fontFamily: `"Raleway", sans-serif`, color: '#B284BE', border: 'solid' }}>Explore</button>
                    </div>


                    
                    <div className='pt-2 d-flex flex-column mb-5' >
                        <h1 className='mt-4 text-center'>Explore what your community is sharing..</h1>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 3,
                                flexWrap: 'wrap', 
                                marginTop: 4
                            }}
                        >
                            <Box sx={{ width: 250, height: 250 }}>
                                <Card className='shadow'
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        p: 2
                                    }}
                                >
                                    {card}
                                </Card>
                            </Box>

                            <Box sx={{ width: 250, height: 250 }}>
                                <Card className='shadow'
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        p: 2
                                    }}
                                >
                                    {card1}
                                </Card>
                            </Box>

                            
                        </Box>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing