import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, styled} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const drawerWidth = 240

const CustomAppBar = styled(AppBar)(({ theme, drawerOpen }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(drawerOpen && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        }),
        minHeight: '64px',
        marginBottom: '64px',
    }));

const pages = [
    {
        name: "Home",
        path: "/home"
    },
    {
        name: "Patients",
        path: "/patients"
    },
    {
        name: "Calender",
        path: "/calender"
    },
    {
        name: "Workups",
        path: "/workups"
    }
]
const userSettings = [
    {
        name: "Profile",
        path: "/profile"
    },
    {
        name: "Settings",
        path: "/settings"
    },
    {
        name: "Logout",
        path: "/logout"
    },
    {
        name: "Login",
        path: "/login"
    }
]


export default function MetisHeader({ handleDrawerOpen, drawerOpen }) {

    const navigate = useNavigate();

    return (
        <>
            <CustomAppBar position={"fixed"} drawerOpen={drawerOpen}>
                <Container>
                    <Toolbar disableGutters>
                        <IconButton
                            color={'inherit'}
                            onClick={handleDrawerOpen}
                            edge={"start"}
                            sx={{
                                marginRight: 5,
                                opacity: drawerOpen ? 0 : 1,
                                transition: 'opacity 0.3s ease'}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' }
                        }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="home"
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                METIS
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, marginLeft: '-155px', display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={() => navigate(page.path)}
                                    sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        
                    </Toolbar>
                </Container>
            </CustomAppBar>
            <Box
                sx={{
                    display: {xs: 'flex', md: 'none'},
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '64px',
                    width: '100%',
                }}
            >
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </Box>

        </>
    )
}