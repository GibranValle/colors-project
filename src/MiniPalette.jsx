import React from 'react';
import styles from './styles/MiniPalette'

const {RootDiv, MiniColor, ColorDiv, Footer, Emoji} = styles

export default function MiniPalette(props) {
    const { paletteName, emoji, colors }=props
    const miniColorBoxes=colors.map(color => {
        return <MiniColor color={color.color} key={color.name}> </MiniColor>
    })
    const goToPalette=() => props.goToPalette(props.id)

    return (
        <RootDiv onClick={goToPalette}>
            <ColorDiv>
                {miniColorBoxes}
            </ColorDiv>
            <Footer>
                <span>{paletteName}</span>
                <Emoji>{emoji}</Emoji>
            </Footer>
        </RootDiv>
    );
}