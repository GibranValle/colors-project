import React, { Component } from 'react'
import SliderRC from 'rc-slider'
import 'rc-slider/assets/index.css'
import Select, { } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import styles from './styles/Navbar'
const { RootDiv, Logo, StyledLink, SliderContainer, Slider, SelectContainer }=styles


export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state={
            open: false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleLevelChange=this.handleLevelChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.closeSnackbar=this.closeSnackbar.bind(this)
    }
    handleLevelChange(level) {
        this.props.changeLevel(level)
    }
    handleChange(e) {
        this.props.changeFormat(e.target.value)
        this.setState({ open: true })
    }
    handleClick() {
        this.closeSnackbar()
    }
    closeSnackbar() {
        this.setState({ open: false })
    }
    render() {
        const { format, level }=this.props
        const snack=<span>Format changed to {format}</span>
        return (
            <RootDiv>
                <Logo>
                    <StyledLink to='/'>reactColors</StyledLink>
                </Logo>
                {!this.props.singleColor&&
                    <SliderContainer>
                        <span>Level: </span>
                        <Slider className='Slider'>
                            <SliderRC defaultValue={level} min={100} max={900}
                                step={100} onChange={this.handleLevelChange} />
                        </Slider>
                    </SliderContainer>}
                <SelectContainer>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem key={'hex'} value='hex'>Hex - #ffffff</MenuItem>
                        <MenuItem key={'rgb'} value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem key={'rgba'} value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </SelectContainer>
                <Snackbar key='snack1' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open} autoHideDuration={3000}
                    message={snack} onClose={this.closeSnackbar}
                    id='message-id' ContentProps={{ "aria-describedby": "message-id" }}
                    action={[
                        <IconButton key='icon1' onClick={this.handleClick} color='inherit'>
                            <CloseIcon />
                        </IconButton>
                    ]} />
            </RootDiv>
        )
    }
}
