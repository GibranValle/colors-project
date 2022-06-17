import React from 'react';

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';

import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteFormDialog from './PaletteFormDialog';
import theme from './styles/sizes'
import Style from './styles/PaletteNav'
import { AppBarHeight, drawerWidth } from './constants';

export default function PaletteNav(props) {
    const { open, savePalette, openDrawer, palettes, drawerWidth }=props

    const handleSubmit=(paletteName, emoji) => {
        savePalette(paletteName, emoji)
    }
    const handleClick=() => {
        openDrawer()
    }

    const AppBar=styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop!=='open'
    })(({ theme, open }) => ({
        heigh: `${AppBarHeight}px !important`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open&&{
            // width: `calc(100% - ${drawerWidth}px)`,
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
            <AppBar position="fixed" open={open} color='default' className='AppBar' sx={{
                minHeight: '64px !important'
            }}>
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    height: '100%',
                    minHeight: '64px !important'
                }} className='ToolBar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleClick}
                        edge="start"
                        sx={{ mr: 2, ...(open&&{ display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Style.Title theme={theme}>Create a Palette</Style.Title>

                    <Stack direction={'row'} gap={'0.5em'} justifyContent="center" alignItems="center">
                        <PaletteFormDialog palettes={palettes} handleSubmit={handleSubmit} theme={theme} />
                        <Style.Link theme={theme} to={'/'} color='error'>Go Back</Style.Link>
                    </Stack>

                </Toolbar>
            </AppBar>
        </nav>
    )
}
