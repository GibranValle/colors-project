import Palette from './Palette';
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Palettes from './seedColors';

export default function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || Palettes)
  const SavePalette = (newPalette) => {
    const newPalettes = [...palettes, newPalette]
    setPalettes(newPalettes)
  }
  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  })
  const DeletePalette = (id) => {
    const newPalettes = palettes.filter(palette => palette.id !== id)
    setPalettes(newPalettes)
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path='/palette/new' element={<NewPaletteForm palettes={palettes} savePalette={SavePalette}/>}></Route>
        <Route exact path='/' element={<PaletteList palettes = {palettes} DeletePalette={DeletePalette}/>}/>
        <Route exact path='/palette/:paletteId' element={<Palette />}/>
        <Route exact path='/palette/:paletteId/:colorId' element={<SingleColorPalette />}/>
      </Routes>
    </div>
  );
}