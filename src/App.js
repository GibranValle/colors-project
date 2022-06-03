import Palette from './Palette';
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette';

import './App.css';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<PaletteList palettes = {seedColors}/>}/>
        <Route exact path='/palette/:paletteId' element={<Palette />}/>
        <Route exact path='/palette/:paletteId/:colorId' element={<SingleColorPalette />}/>
      </Routes>
    </div>
  );
}

export default App;