// LIST PALETTE
// MUI RESPONSIVE MEDIA QUERY

import { styled, experimental_sx as sx, createTheme } from '@mui/system'
import { Link } from 'react-router-dom'
// import { createTheme } from '@mui/system'

import { lightColor, darkColor } from '../constants'

const Styles = {
  // theme: createTheme({
  //   breakpoints: {
  //     values: {
  //       xxs: 0, // small phone
  //       xs: 300, // phone
  //       sm: 600, // tablets
  //       md: 900, // small laptop
  //       lg: 1200, // desktop
  //       xl: 1536 // large screens
  //     }
  //   }
  // }),
  RootDiv: styled('div')(props => {
    const isSingle = props.singlecolor === 'true'
    const isButton = props.button === 'true'
    return sx({
      backgroundColor: props.background,
      width: {
        xs: `${isSingle? '100%':'100%'}`, // 100/20 color rows - 100/10
        sm: `${isSingle? '50%':'50%'}`, // 100/10 color rows
        md: `${isSingle? '50%':'25%'}`, // 100/5 color rows
        lg: `${isSingle? '20%':'20%'}` // 100/4 color rows
      },
      height: {
        xs: `${isSingle? '10%':'5%'}`, // 100/20 color rows - 100/10
        sm: `${isSingle? '20%':'10%'}`, // 100/10 color rows
        md: `${isSingle? '20%':'20%'}`, // 100/5 color rows
        lg: `${isSingle? '50%':'25%'}` // 100/4 color rows
      },
      display: 'inline-block',
      position: 'relative',
      cursor: `${isButton? 'default' :'pointer' }`,
      textAlign: 'start',
      marginBottom: '-4px',
      '&:hover .copy-button': {
        opacity: '1'
      }
    })
  }),
  CopyOverlay: styled('div')(props => {
    const copied = props.copied === 'true'
    return sx({
      opacity: `${copied? 1:0}`,
      zIndex: `${copied? 10:0}`,
      width: '100%',
      height: '100%',
      transition: 'transform 1s ease-in-out',
      transform: `${copied? 'scale(50)':'scale(0.1)'}`,
      backgroundColor: props.background,
      position: 'absolute',
    })
  }),
  CopyMsg: styled('div')(props => {
    const copied = props.copied === 'true'
    return {
      opacity: `${copied? 1:0}`,
      position: 'fixed',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      transform: `${copied? 'scale(1)':'scale(0.1)'}`,
      zIndex: `${copied? 20:0}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '4rem',
      transition: `${copied? 'scale,opacity 0.2s ease-in-out':'none'}`,
      transitionDelay: `${copied? '0.2s':'0'}`,
    }
  }),
  Msg: styled('h1')(props => {
    return sx({
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#ffffff4b',
      color: 'white',
      textShadow: '2px 2px 2px black',
      textTransform: 'uppercase',
      margin: '0',
      fontWeight: '400',
      fontSize: {
        xs: '1em',
        lg: '2em'
      }
    })
  }),
  ColorCode: styled('p')(props => {
    const isDark = props.dark === 'true'
    return sx({
      textAlign: 'center',
      width: '100%',
      backgroundColor: `${isDark? lightColor:darkColor}`,
      color: `${!isDark? lightColor:darkColor}`,
      fontWeight: '600',
      fontSize: {
        xs: '1em',
        lg: '1.75em'
      }
    })
  }),
  BoxContent: styled('div')(props => {
    return {
      position: 'absolute',
      bottom: '0',
      left: '0',
      padding: '5px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '0.8em',
    }
  }),
  ColorName: styled('span')(props => {
    const isDark = props.dark === 'true'
    return {
      color: `${isDark? lightColor:darkColor}`,
    }
  }),
  CopyButton: styled('button')(props => {
    const isDark = props.dark === 'true'
    const isButton = props.button === 'true'
    return {
      width: '100px',
      height: '30px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      outline: 'none',
      textTransform: 'uppercase',
      backgroundColor: `${isDark? lightColor:darkColor}`,
      fontSize: '1rem',
      lineHeight: '30px',
      color: `${!isDark? lightColor:darkColor}`,
      opacity: `${isButton? 1:0}`,
      fontWeight: 600,
      textAlign: 'center',
      transition: 'opacity ease-in 100ms',
      cursor: 'pointer'
    }
  }),
  SeeMore: styled('span')(props => {
    const isDark = props.dark === 'true'
    return {
      position: 'absolute',
      bottom: '0',
      right: '0',
      fontWeight: '500',
      backgroundColor: `${isDark? lightColor:darkColor}`,
      color: `${!isDark? lightColor:darkColor}`,
      textTransform: 'uppercase',
      width: '60px',
      height: '30px',
      lineHeight: '30px',
      textAlign: 'center',
    }
  }),
  StyledLink: (props) => (
    <Link
        style={{
            textDecoration: 'none',
            color: darkColor
        }}

        to={props.to}>
        {props.children}
    </Link>
  )
}

export default Styles