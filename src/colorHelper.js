import chroma from "chroma-js";
import palettes from './seedColors';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const findPalette = (paletteId) => {
  return palettes.find(color => {
    return color.id === paletteId
  })
};

function generatePalette(paletteId) {
  const startPalette = findPalette(paletteId)
  let newPalette = {
    paletteName: startPalette.paletteName,
    id: startPalette.id,
    emoji: startPalette.emoji,
    colors: {}
  }

  for (let level of levels) {
    newPalette.colors[level] = []
  }

  for (let color of startPalette.colors) {
    let scale = getScale(color.color, levels.length)
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name}-${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
      })
    }
  }
  delete newPalette.colors[50]
  return newPalette
}

function getShades(paletteId, colorId) {
  const palette = generatePalette(paletteId)
  const allColors = palette.colors
  const shades = []
  for (let key in allColors) {
    shades.push(allColors[key].find(color => color.id === colorId))
  }
  return shades
}

function getRange(hexColor) {
  const endColor = '#fff';
  return [
    endColor,
    hexColor,
    chroma(hexColor).darken(1.4).hex(),
  ]
}

function getScale(hexColor, numberColors) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberColors)
}

export { generatePalette, getShades }