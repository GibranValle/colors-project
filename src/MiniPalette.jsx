import React from 'react';
import styles from './styles/MiniPalette'
import DeleteIcon from '@mui/icons-material/Delete';

const { RootDiv, MiniColor, ColorDiv, Footer, Emoji, DeleteButton, theme }=styles

export default function MiniPalette(props) {
    const { paletteName, emoji, colors, id, DeletePalette }=props
    const miniColorBoxes=colors.map(color => {
        return <MiniColor theme={theme} className='MiniBox' color={color.color} key={color.name}> </MiniColor>
    })
    const goToPalette=() => props.goToPalette(props.id)

    const handleClick=(e) => {
        e.stopPropagation()
        console.log('click')
        DeletePalette(id)
    }

    return (
        <RootDiv onClick={goToPalette} className='MiniPalette'>
            <DeleteButton className='svg' onClick={handleClick}>
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