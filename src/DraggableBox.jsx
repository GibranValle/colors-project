import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';
import { styled, experimental_sx as sx } from '@mui/system'

const Styled={
  Root: styled('div')(props => (sx({
      backgroundColor: `${props.color}`,
      height: '25%',
      width: '20%',
      margin: '0 auto',
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      marginBottom: '-6.8px',
      '&:hover svg': {
        color: 'white',
        transform: 'scale(1.15)'
      }
  }))),
  BoxContent: styled('div')(props => {
    return {
      position: 'absolute',
      bottom: '0',
      left: '0',
      padding: '5px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '1m',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      'span': {
        paddingLeft: '5px'
      }
    }
  }),
  DeleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: '0.3s all ease-in',
    transform: 'scale(1)',
  }
}

const DraggableBox=SortableElement((props) => {
  const { color, name, handleDelete }=props
  const handleClick=() => {
    handleDelete(name)
  }
  return (
    <Styled.Root color={color} className='DraggableBox'>
      <Styled.BoxContent className='BoxContent'>
        <span>{name}</span>
        <DeleteIcon onClick={handleClick} sx={Styled.DeleteIcon} />
      </Styled.BoxContent>
    </Styled.Root>
  )
})

export default DraggableBox

