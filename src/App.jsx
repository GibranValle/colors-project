import Palette from './Palette';
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Palettes from './seedColors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {
  const location=useLocation();
  const savedPalettes=JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes]=useState(savedPalettes||Palettes)
  const SavePalette=(newPalette) => {
    const newPalettes=[...palettes, newPalette]
    setPalettes(newPalettes)
  }
  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  })
  const DeletePalette=(id) => {
    const newPalettes=palettes.filter(palette => palette.id!==id)
    setPalettes(newPalettes)
  }
  return (
    <div className="App">
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames='fade' timeout={400}>
          <Routes location={location}>
            <Route exact path='/palette/new' element={
              <div className='page'>
                <NewPaletteForm palettes={palettes} savePalette={SavePalette} />
              </div>
            } />
            <Route exact path='/' element={
              <div className='page'>
                <PaletteList palettes={palettes} DeletePalette={DeletePalette} />
              </div>
            } />
            <Route exact path='/palette/:paletteId' element={
              <div className='page'>
                <Palette />
              </div>
            } />
            <Route exact path='/palette/:paletteId/:colorId' element={
              <div className='page'>
                <SingleColorPalette />
              </div>
            } />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}