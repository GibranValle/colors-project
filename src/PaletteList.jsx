import React from 'react'
import MiniPalette from './MiniPalette'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

import styles from './styles/PaletteList'
const { RootDiv, Container, Palettes, Nav }=styles

export default function PaletteList(props) {
    console.log(props.palettes)
    //hooks
    let navigate=useNavigate();
    //props
    const { palettes }=props
    //funtions
    const useGoToPalette=id => { navigate(`/palette/${id}`) }

    return (
        <RootDiv className='Palette-list'>
            <Container className='Palette-container'>
                <Nav className='Navbar'>
                    <h1>React Colors</h1>
                    <Link to='/palette/new' className='Link'>Create palette</Link>
                </Nav>
                <Palettes className='Palettes'>
                    {palettes.map(palette => <MiniPalette key={palette.id} {...palette} goToPalette={useGoToPalette} />)}
                </Palettes>
            </Container>
        </RootDiv>
    )
}
