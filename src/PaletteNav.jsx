import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteFormDialog from './PaletteFormDialog';

export default function PaletteNav(props) {
    const { open, savePalette, openDrawer, palettes, drawerWidth }=props

    const handleSubmit=(paletteName) => {
        savePalette(paletteName)
    }
    const handleClick=() => {
        openDrawer()
    }

    const AppBar=styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop!=='open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open&&{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    return (
        <nav>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default' className='AppBar'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleClick}
                        edge="start"
                        sx={{ mr: 2, ...(open&&{ display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="nav" fontSize={'1.5em'}>
                        {/* HERE GOES THE BARTITLE */}
                        Create a Palette
                    </Typography>

                    <PaletteFormDialog palettes={palettes} handleSubmit={handleSubmit} />
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button variant='contained' color='error' sx={{ height: '54px', lineHeight: '54px', fontSize: '1.25em' }}>
                            Go back
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </nav>
    )
}
