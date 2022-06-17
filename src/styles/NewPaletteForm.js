import { styled } from '@mui/material/styles';
import { AppBarHeight, drawerWidth } from '../constants';

const Styled = {
  Main: styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: `calc(100vh - ${AppBarHeight}px)`,
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  ),
  DrawerColumn: styled('div')((props) => {
    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90%',
      // backgroundColor: props.theme.palette.primary.dark
      backgroundColor: 'primary',
      gap: '15px',
      ' form': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        marginTop: '15px',
      },
      'form > div': {
        width: `calc(${drawerWidth}px - 2em)`
      },
      ' .chrome-picker': {
        width: `calc(${drawerWidth}px - 2em) !important`,
        textAlign: 'center'
      }
    }
  }),
  DrawerHeader: styled('div')(({ theme }) => ({
    height: `${AppBarHeight}px`,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  }))
}

export default Styled