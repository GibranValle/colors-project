import React, { useState } from 'react'
import MiniPalette from './MiniPalette'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { red, blue } from '@mui/material/colors';

import theme from './styles/sizes'
import './styles/transitions.css'

import styles from './styles/PaletteList'
const { RootDiv, Container, Palettes, Nav }=styles

export default function PaletteList(props) {
    const { DeletePalette }=props
    const [open, setOpen]=useState(false)
    const [id, setId]=useState('')
    //hooks
    let navigate=useNavigate();
    //props
    const { palettes }=props
    //funtions
    const useGoToPalette=id => { navigate(`/palette/${id}`) }

    const openDialog=(id) => {
        setOpen(true)
        setId(id)
    }
    const closeDialog=() => {
        setOpen(false)
        setId('')
    }
    const handleClick=() => {
        DeletePalette(id)
        setOpen(false)
    }

    return (
        <RootDiv className='Palette-list'>
            <Container theme={theme} className='Palette-container'>
                <Nav className='Navbar'>
                    <h1>React Colors</h1>
                    <Link to='/palette/new' className='Link'>Create palette</Link>
                </Nav>
                <Palettes className='Palettes'>
                    {palettes.map(palette =>
                        <CSSTransition key={palette.id} classNames={'fade'}
                            timeout={2000}>
                            <MiniPalette key={palette.id} id={palette.id}
                                DeletePalette={openDialog} {...palette} goToPalette={useGoToPalette} />
                        </CSSTransition>
                    )}
                </Palettes>
            </Container>
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>Confirm delete</DialogTitle>
                <List>
                    <ListItem button onClick={handleClick}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: red[100], color: red[500] }}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Delete' />
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: blue[100], color: blue[500] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Cancel' />
                    </ListItem>
                </List>
            </Dialog>
        </RootDiv>
    )
}
