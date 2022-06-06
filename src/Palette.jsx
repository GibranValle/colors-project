import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { generatePalette } from './colorHelper';
import { useParams } from 'react-router-dom';

import styles from './styles/Palette'
const { RootDiv, PaletteColors }=styles


export default function Palette() {
    // new state form 
    const [level, setLevel]=useState(500);
    const [format, setFormat]=useState('hex');
    const changeLevel=(level) => {
        setLevel(level);
    };
    const changeFormat=(val) => {
        setFormat(val);
    };

    // query params
    const { paletteId }=useParams();
    const palette=generatePalette(paletteId);
    const { paletteName, emoji }=palette
    const props={ paletteName, emoji }
    // const props = {palette.paletteName}
    const colorBoxes=palette.colors[level].map(color => {
        return <ColorBox background={color[format]} name={color.name}
            key={color.id} colorId={color.id} paletteId={paletteId} />
    })

    return (
        <RootDiv className='Palette'>
            <Navbar changeLevel={changeLevel} level={level}
                format={format} changeFormat={changeFormat} />
            <PaletteColors className='Palette-colors'>
                {colorBoxes}
            </PaletteColors>
            <PaletteFooter {...props} />
        </RootDiv>
    )
}