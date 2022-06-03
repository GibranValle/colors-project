import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export default {
  RootDiv: styled('nav')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '5%'
  }),
  Logo: styled('div')({
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  }),
  StyledLink: (props) => (
    <Link
        style={{
            fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
            textDecoration: 'none',
            color: 'black',
        }}

        to={props.to}>
        {props.children}
    </Link>
  ),
  SliderContainer: styled('div')({ marginLeft: 'auto' }),
  Slider: styled('div')({
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '&: .rc-slider-track': {
      backgroundColor: 'green'
    },
    '&: .rc-slider-rail': {
      backgroundColor: 'lightgray'
    },
    '&: .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: 'none',
      boxShadow: 'none!important',
      opacity: '1! important',
    },
    '&: .rc-slider-handle-dragging': {
      outline: '4 px solid rgba(0, 128, 0, 0.443) !important',
      border: 'none!important',
      backgroundColor: 'green!important',
      boxShadow: '2 px 2 px 2 px lightgreen!important',
      opacity: '1!important',
    },
  }),
  SelectContainer: styled('div')({ marginLeft: 'auto' }),
}