import React from 'react'
import MiniPalette from './MiniPalette'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import theme from './styles/sizes'

import styles from './styles/PaletteList'
const { RootDiv, Container, Palettes, Nav }=styles

export default function PaletteList(props) {
    const { DeletePalette }=props
    console.log(props.palettes)
    //hooks
    let navigate=useNavigate();
    //props
    const { palettes }=props
    //funtions
    const useGoToPalette=id => { navigate(`/palette/${id}`) }

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
                                DeletePalette={DeletePalette} {...palette} goToPalette={useGoToPalette} />
                        </CSSTransition>
                    )}
                </Palettes>
            </Container>
        </RootDiv>
    )
}
