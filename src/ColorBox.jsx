import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'

import styles from './styles/ColorBox'
const {RootDiv, CopyOverlay, CopyMsg, Msg, ColorCode, BoxContent, CopyButton, StyledLink, SeeMore, ColorName } = styles


export default function Colorbox(props) {
    const [copied, setCopied]=useState(false)
    const handleCopy=() => {
        // useState callback
        setCopied((copied) => {
            setTimeout(() => {
                setCopied(false)
            }, 1000);
            return true
        })
    }
    // rename variable in deconstruction
    const { name, background, colorId, paletteId }=props
    let { singleColor, isButton }=props
    if (typeof singleColor==='undefined') singleColor=false
    if (typeof isButton==='undefined') isButton=false
    const luminance=chroma(background).luminance()
    const isDark=luminance<0.5
    return (
        <CopyToClipboard text={background} onCopy={!isButton && handleCopy}>
            <RootDiv className='ColorBox' background={background} button = {isButton.toString()}
            singlecolor={singleColor.toString()} >
                <CopyOverlay background={background} copied={copied.toString()}></CopyOverlay>
                <CopyMsg copied={copied.toString()}>
                    <Msg>copied</Msg>
                    <ColorCode dark={isDark.toString()}>{background}</ColorCode>
                </CopyMsg>

                <div>
                    <BoxContent>
                        <ColorName dark={isDark.toString()}>{name}</ColorName>
                    </BoxContent>
                    <CopyButton className='copy-button' dark={isDark.toString()} button={isButton.toString()}>
                        {isButton?
                            <StyledLink to={`/palette/${paletteId}`}>go back</StyledLink>
                            :'copy'}
                    </CopyButton>
                </div>
                {!props.singleColor&&
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                        <SeeMore dark={isDark.toString()}>more</SeeMore>
                    </Link>}
            </RootDiv>
        </CopyToClipboard>
    )
}
