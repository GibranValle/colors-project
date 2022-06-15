import { styled } from '@mui/system';

const Style = {
  RootDiv: styled('div')({
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    overflowY: 'auto',
  }),
  Container: styled('div')({
    width: '70%',
    display: 'flex',
    height: '50%',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }),
  Nav: styled('nav')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '.Link': {
      color: 'white'
    }
  }),
  Palettes: styled('div')({
    height: '20%',
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5%'
  })
}

export default Style