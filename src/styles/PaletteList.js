import { styled } from '@mui/system';

export default{
  RootDiv: styled('div')({
    backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }),
  Container: styled('div')({
    width: '50%',
    display: 'flex',
    height: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  }),
  Nav: styled('nav')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  }),
  Palettes: styled('div')({
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gap: '5%'
  })
}