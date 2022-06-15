import React, { useState } from 'react';
import { useNavigate } from "react-router";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DraggableComponent from './DraggableComponent';
import { arrayMoveImmutable } from 'array-move';

import PaletteNav from './PaletteNav'
import ColorPickerForm from './ColorPickerForm';
import Styled from './styles/NewPaletteForm';

import { drawerWidth, MAX_COLORS } from './constants'


export default function NewPaletteForm(props) {
  const { palettes }=props
  let navigate=useNavigate();
  const useGoToHome=() => { navigate(`/`) }

  const theme=useTheme();
  const [open, setOpen]=useState(false);
  const [colors, setColors]=useState(props.palettes[0].colors)

  const handleDrawerOpen=() => setOpen(true);

  const handleDrawerClose=() => setOpen(false);

  const saveColor=(newColor) => setColors([...colors, newColor])

  const handleDelete=(name) => setColors(colors.filter(color => color.name!==name))

  const handleClear=() => setColors([])

  const pickRandom=(allColors) => allColors[Math.floor(Math.random()*allColors.length)]

  const handleRandom=() => {
    const allColors=palettes.map(p => p.colors).flat()
    let randColor=pickRandom(allColors)
    // every of [] returns true
    if (colors.length===0) setColors([randColor])
    else {
      // working better with negative
      let isUnique=colors.every(color => color.name!==randColor.name)
      while (!isUnique) {
        randColor=pickRandom(allColors)
        isUnique=colors.every(color => color.name!==randColor.name)
      }
      setColors([...colors, randColor])
    }
  }

  const hanldeSortEnd=(newIndex, oldIndex) => {
    setColors(arrayMoveImmutable(colors, oldIndex, newIndex))
  }

  const HanldeSavePalette=(paletteName, emoji) => {
    const newPalette={
      paletteName,
      colors,
      emoji,
      id: paletteName.replace(/ /g, '-')
    }
    props.savePalette(newPalette)
    useGoToHome()
  }

  let paletteFull=colors.length>=MAX_COLORS
  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteNav open={open} savePalette={HanldeSavePalette} openDrawer={handleDrawerOpen}
        palettes={palettes} drawerWidth={drawerWidth} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className='Drawer'
        variant="persistent"
        anchor="left"
        open={open}>
        <Styled.DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction==='ltr'? <ChevronLeftIcon />:<ChevronRightIcon />}
          </IconButton>
        </Styled.DrawerHeader>
        <Divider />
        {/* DRAWER CONTENT */}
        <Styled.DrawerColumn className='DrawerColumn'>
          <Typography variant='h4' fontWeight={500}>Design your palette</Typography>
          <Stack spacing={1} direction={'row'}>
            <Button sx={{ fontSize: '1.25em' }}
              variant='contained' color='secondary' onClick={handleClear}>Clear palette</Button>
            <Button sx={{ fontSize: '1.25em' }} variant='contained' color='primary' onClick={handleRandom}
              disabled={paletteFull}>Random color</Button>
          </Stack>
          <ColorPickerForm colors={colors} saveColor={saveColor} paletteFull={paletteFull} />
        </Styled.DrawerColumn>
      </Drawer>
      <Styled.Main open={open} className='Main'>
        <Styled.DrawerHeader />
        {/* PAGE GOES HERE */}
        <DraggableComponent colors={colors} handleDelete={handleDelete} className='draggable' hanldeSortEnd={hanldeSortEnd} />
      </Styled.Main>
    </Box>
  );
}


/*
breakpoints: {keys: Array(5), values: {…}, up: ƒ, down: ƒ, between: ƒ, …}
components: {}
direction: "ltr"
mixins: {toolbar: {…}}
palette: {mode: 'light', common: {…}, primary: {…}, secondary: {…}, error: {…}, …}
shadows: (25) ['none', '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)', '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)', '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)', '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)', '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)', '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)', '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)', '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px…gba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)', '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px…gba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)', '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px…gba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)', '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px…gba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)', '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px…gba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)', '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px…gba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)', '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2p…gba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)', '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2p…gba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)', '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2p…gba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)', '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2p…gba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)', '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3…gba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)', '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3…gba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)', '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3…gba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)', '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3…gba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)', '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3…gba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)']
shape: {borderRadius: 4}
spacing: ƒ ()
transitions: {easing: {…}, duration: {…}, getAutoHeightDuration: ƒ, create: ƒ}
typography: {htmlFontSize: 16, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: 14, fontWeightLight: 300, pxToRem: ƒ, …}
zIndex: {mobileStepper: 1000, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, …}
 */