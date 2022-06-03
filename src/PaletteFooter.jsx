import React from 'react'
import { styled } from '@mui/system'

const RootDiv=styled('div')({
    height: '5%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& span:last-child': {
        padding: '0 10px'
    }
})

export default function PaletteFooter(props) {
    return (
        <RootDiv>
            <span>{props.paletteName}</span>
            <span>{props.emoji}</span>
        </RootDiv>
    )
}
