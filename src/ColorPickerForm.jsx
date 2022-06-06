import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ChromePicker } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { styled } from '@mui/system';

const Styled={
    Root: styled('div')({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    })
}

export default function ColorPickerForm(props) {
    const { colors, saveColor, paletteFull }=props
    const [name, setName]=useState('')
    const [color, setColor]=useState('')

    const handleChange=(e) => setName(e.target.value)

    const handleColorChange=(newColor) => setColor(newColor.hex)

    const handleSubmit=() => {
        const newColor={ color, name }
        saveColor(newColor)
    }

    // VALIDATIONS RULES
    ValidatorForm.addValidationRule('isColorUnique', value => colors.every(c => c.color!==color))
    ValidatorForm.addValidationRule('isColorNameUnique', value => colors.every(c => c.name!==value))
    return (
        <Styled.Root className='ColorPicker'>
            <ChromePicker color={color} onChangeComplete={handleColorChange} sx={{ width: '100%' }} />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator value={name} onChange={handleChange} sx={{ width: '100%' }}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={[
                        'this field is required',
                        'color name must be unique',
                        'color already used'
                    ]}
                />
                <Button variant='contained' type='submit' disabled={paletteFull}
                    sx={{
                        fontSize: '1.75em',
                        backgroundColor: color,
                        '&:hover': {
                            backgroundColor: color,
                            borderColor: color,
                            boxShadow: 'none',
                        },
                        '&:active': {
                            boxShadow: 'none',
                            backgroundColor: color,
                            // borderColor: '#005cbf',
                        },
                        '&:focus': {
                            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                        },
                    }}>{paletteFull? 'Palette full':'Add more'}</Button>
            </ValidatorForm>
        </Styled.Root>
    )
}
