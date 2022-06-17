import { createTheme } from '@mui/system'

export const lightColor = '#ffffffda'
export const darkColor = '#626262'
export const drawerWidth = 400;
export const MAX_COLORS = 20
export const AppBarHeight = 64;

export const themeSizes = {
  theme: createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  })
}