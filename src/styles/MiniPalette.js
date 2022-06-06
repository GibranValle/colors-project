import { styled, experimental_sx as sx } from '@mui/system';

const Style = {
  RootDiv: styled('div')(
    sx({
      height: '150px',
      color: '#000',
      backgroundColor: 'white',
      border: '1px solid black',
      padding: "0.5rem",
      position: 'relative',
      marginTop: '5px',
      borderRadius: '5px',
      "&:hover": {
        cursor: 'pointer'
      }
    })
  ),
  ColorDiv: styled('div')(
    sx({
      backgroundColor: 'gray',
      height: '120px',
      borderRadius: '5px',
      overflow: 'hidden',
      textAlign: 'start'
    })
  ),
  MiniColor: styled('div')(props => ({
    backgroundColor: props.color,
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px'
  })),

  Footer: styled('h5')(
    sx({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'black',
      margin: '0',
      paddingTop: '0.5rem',
      fontSize: '1rem',
      position: 'relative'
    })
  ),
  Emoji: styled('span')(sx({ marginLeft: '0.5rem', fontSize: '1.5rem' }))
}

export default Style