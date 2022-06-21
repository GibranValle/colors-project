import styled from '@emotion/styled'
import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import DraggableBox from './DraggableBox'
import theme from './styles/sizes'

const Styled={
    Root: styled('div')({
        height: '100%'
    })
}

//always return map inside div or something
const DraggableList=SortableContainer(props => {
    const { colors, handleDelete }=props
    return (
        <Styled.Root className='DraggableList'>
            {colors.map((color, index) => <DraggableBox color={color.color} theme={theme}
                name={color.name} handleDelete={handleDelete} index={index} key={color.name} />)}
        </Styled.Root>
    )
})

export default function DraggableComponent(props) {
    const onSortEnd=({ newIndex, oldIndex }) => {
        props.hanldeSortEnd(newIndex, oldIndex)
    }
    return <DraggableList {...props} onSortEnd={onSortEnd} axis='xy' distance={20} />
}
