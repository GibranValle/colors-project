import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Style = {
  Title: props => (
    <Typography variant="h6" noWrap component="nav"
            sx={{
                padding: '2px 0',
                fontSize: {
                    xs: '1em',
                    md: '1em'
                }
            }}>
            Create a Palette
        </Typography>
  ),
  Link: props => (
    <Link to={props.to} style={{ textDecoration: 'none' }}>
            <Button variant='contained' color={props.color}
                sx={{
                    padding: '0.1em 0.5em',
                    fontSize: {
                        xs: '0.75em',
                        md: '1em'
                    }
                }}>
                {props.children}
            </Button>
        </Link>
  ),
  Button: props => (
    <Button variant="contained" color='primary' onClick={props.handleClickOpen} 
    sx={{                 
        padding: '0.1em 0.5em',
        fontSize: {
            xs: '0.75em',
            md: '1em'
        }
    }}>
        {props.children}
    </Button>
  )
}

export default Style