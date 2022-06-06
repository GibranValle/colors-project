import { styled } from '@mui/system';

const Style = {
  RootDiv: styled('div')({
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%'
  }),
  Container: styled('div')({
    width: '70%',
    display: 'flex',
    height: '50%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gap: '5%'
  })
}

export default Style