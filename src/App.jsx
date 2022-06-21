import Palette from './Palette';
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Palettes from './seedColors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {
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
      <Routes>
        <TransitionGroup>
          <Route exact path='/palette/new' element={
            <CSSTransition key={1} classNames='fade' timeout={}>
              <NewPaletteForm palettes={palettes} savePalette={SavePalette} />
            </CSSTransition>
          }></Route>
          <Route exact path='/' element={
            <CSSTransition>
              <PaletteList palettes={palettes} DeletePalette={DeletePalette} />
            </CSSTransition>
          } />
          <Route exact path='/palette/:paletteId' element={
            <CSSTransition>
              <Palette />
            </CSSTransition>
          } />
          <Route exact path='/palette/:paletteId/:colorId' element={
            <CSSTransition>
              <SingleColorPalette />
            </CSSTransition>
          } />
        </TransitionGroup>
      </Routes>
    </div>
  );
}