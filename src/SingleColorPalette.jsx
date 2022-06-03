import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette, getShades } from './colorHelper';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import styles from './styles/Palette'
const { RootDiv, PaletteColors }=styles

export default function SingleColorPalette(props) {
    const [format, setFormat]=useState('hex')
    const changeFormat=(val) => {
        setFormat(val)
    }
    const { paletteId, colorId }=useParams()
    const palette=generatePalette(paletteId)
    const { paletteName, emoji }=palette
    const footerProps={ paletteName, emoji }
    const shades=getShades(paletteId, colorId)
    return (
        <RootDiv>
            <Navbar format={format} changeFormat={changeFormat} singleColor />
            <PaletteColors>
                {shades.map(shade => <ColorBox background={shade[format]} name={shade.name}
                    key={shade.name} colorId={shade.id} paletteId={paletteId} singleColor />)}
                <ColorBox background={'black'} name={''} isButton
                    key={'back-button'} colorId={'back-button'} paletteId={paletteId} singleColor />
            </PaletteColors>
            <PaletteFooter {...footerProps} />    
        </RootDiv>
    )
}
