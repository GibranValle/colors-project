import React from 'react';
import styles from './styles/MiniPalette'
import DeleteIcon from '@mui/icons-material/Delete';

const { RootDiv, MiniColor, ColorDiv, Footer, Emoji, DeleteButton }=styles

export default function MiniPalette(props) {
    const { paletteName, emoji, colors }=props
    const miniColorBoxes=colors.map(color => {
        return <MiniColor className='MiniBox' color={color.color} key={color.name}> </MiniColor>
    })
    const goToPalette=() => props.goToPalette(props.id)

    return (
        <RootDiv onClick={goToPalette} className='MiniPalette'>
            <DeleteButton className='svg'>
                <DeleteIcon />
            </DeleteButton>
            <ColorDiv className='MiniBox-container'>
                {miniColorBoxes}

            </ColorDiv>
            <Footer>
                <span>{paletteName}</span>
                <Emoji>{emoji}</Emoji>
            </Footer>
        </RootDiv>
    );
}