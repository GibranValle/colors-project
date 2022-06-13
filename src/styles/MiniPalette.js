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
      cursor: 'pointer',
      "&:hover .svg": {
        opacity: '1'
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
  DeleteButton: styled('div')({
    backgroundColor: 'red',
    padding: '10px',
    position: 'absolute',
    right: '0',
    top: '0',
    opacity: '0',
    zIndex: '10',
    color: 'white',
    transition: 'opacity 200ms ease-in',
    borderRadius: '0 5px 0 0'
  }),
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