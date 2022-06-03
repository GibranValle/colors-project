import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

const lightColor = '#ffffffda'
const darkColor = '#626262'

export default {
  RootDiv: styled('div')(props => {
    const isSingle = props.singlecolor === 'true'
    const isButton = props.button === 'true'
    return {
      backgroundColor: props.background,
      width: '20%',
      height: `${isSingle? '50%':'25%'}`,
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: `${isButton? 'default' :'pointer' }`,
      textAlign: 'start',
      marginBottom: '-4px',
      // "&:hover": {
      //     '& .copy-button': {
      //         opacity: '1'
      //     }
      // }
      '&:hover .copy-button': {
        opacity: '1'
      }
    }
  }),
  CopyOverlay: styled('div')(props => {
    // convert string to boolean
    const copied = props.copied === 'true'
    return {
      opacity: `${copied? 1:0}`,
      zIndex: `${copied? 10:0}`,
      width: '100%',
      height: '100%',
      transition: 'transform 1s ease-in-out',
      transform: `${copied? 'scale(50)':'scale(0.1)'}`,
      backgroundColor: props.background,
      position: 'absolute'
    }
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
  Msg: styled('h1')({
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ffffff4b',
    color: 'white',
    textShadow: '2px 2px 2px black',
    textTransform: 'uppercase',
    margin: '0',
    fontWeight: '400',
  }),
  ColorCode: styled('p')(props => {
    const isDark = props.dark === 'true'
    return {
      textAlign: 'center',
      width: '100%',
      backgroundColor: `${isDark? lightColor:darkColor}`,
      color: `${!isDark? lightColor:darkColor}`,
      fontWeight: '600'
    }
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