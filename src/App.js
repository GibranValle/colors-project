import Palette from './Palette';
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import Palettes from './seedColors';

export default function App() {
  const [palettes, setPalettes] = useState(Palettes)
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
    console.log(palettes)
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path='/palette/new' element={<NewPaletteForm palettes={palettes} savePalette={savePalette}/>}></Route>
        <Route exact path='/' element={<PaletteList palettes = {palettes}/>}/>
        <Route exact path='/palette/:paletteId' element={<Palette />}/>
        <Route exact path='/palette/:paletteId/:colorId' element={<SingleColorPalette />}/>
      </Routes>
    </div>
  );
}