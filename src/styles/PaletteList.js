import { styled, experimental_sx as sx } from '@mui/system';
import bg from './confetti.svg'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Box } from '@mui/material';

const Style = {
  RootDiv: styled('div')({
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    overflowY: 'auto',
    width: '100%',
    backgroundImage: `url(${bg})`
  }),
  Container: styled('div')(props => (
    sx({
      display: 'flex',
      height: '50%',
      alignItems: 'flex-end',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      height: '100%',
      width: {
        xs: '100%',
        lg: '70%'
      }
    })
  )),
  Nav: styled('nav')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    '.Link': {
      color: 'white'
    }
  }),
  Palettes: props => (
    <TransitionGroup style={{
      height: '20%',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '5%'
    }}>{props.children}</TransitionGroup>
  )
  // Palettes: styled('div')({
  //   height: '20%',
  //   boxSizing: 'border-box',
  //   width: '100%',
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   gap: '5%'
  // })
}

export default Style