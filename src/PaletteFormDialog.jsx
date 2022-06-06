import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { styled } from '@mui/material/styles';

export default function PaletteFormDialog(props) {
    const { palettes, handleSubmit }=props
    const [open, setOpen]=useState(false)
    const [paletteName, setPaletteName]=useState('')
    const handleClickOpen=() => {
        setOpen(true)
    };

    const handleClose=() => {
        setOpen(false)
    }

    const handleChange=(e) => {
        setPaletteName(e.target.value)
    }

    const handleDialogSubmit=() => {
        handleSubmit(paletteName)
    }

    ValidatorForm.addValidationRule('isPaletteNameUnique', value => palettes.every(p => p.paletteName!==value))
    return (
        <div>
            <Button variant="contained" color='primary' onClick={handleClickOpen} sx={{ height: '55px', fontSize: '1.25em' }}>
                Save Palette
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <ValidatorForm onSubmit={handleDialogSubmit} style={{width: '350px', textAlign: 'center'}}>
                    <DialogTitle>Create a new Palette</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter a new palette name
                        </DialogContentText>
                        <TextValidator label={'Palette Name'} value={paletteName} validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter Palette Name', 'Palette Name must be unique']}
                            sx={{ marginTop: '15px', width: '100%' }}
                            onChange={handleChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button color={'error'} variant='contained' onClick={handleClose} sx={{ width: '100%' }}>Cancel</Button>
                        <Button variant='contained' color='primary' type='submit' sx={{ width: '100%' }}>Save Palette</Button>
                    </DialogActions>
                </ValidatorForm>

            </Dialog>
        </div>
    )
}
