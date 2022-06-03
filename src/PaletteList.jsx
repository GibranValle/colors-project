import React from 'react'
import MiniPalette from './MiniPalette'
import { useNavigate } from "react-router";

import styles from './styles/PaletteList'
const { RootDiv, Container, Palettes, Nav }=styles

export default function PaletteList(props) {
    //hooks
    let navigate=useNavigate();
    //props
    const { palettes }=props
    //funtions
    const useGoToPalette=id => { navigate(`/palette/${id}`) }

    return (
        <RootDiv>
            <Container>
                <Nav>
                    <h1>React Colors</h1>
                </Nav>
                <Palettes>
                    {palettes.map(palette => <MiniPalette key={palette.id} {...palette} goToPalette={useGoToPalette} />)}
                </Palettes>
            </Container>
        </RootDiv>
    )
}
