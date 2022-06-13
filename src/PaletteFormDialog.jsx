import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import EmojiPicker from './EmojiPicker';

export default function PaletteFormDialog(props) {
    const { palettes, handleSubmit }=props
    const [stage, setStage]=useState('')
    const [paletteName, setPaletteName]=useState('')
    const [emoji, setEmoji]=useState('')

    const handleClickOpen=() => setStage('form')

    const handleClose=() => setStage('')

    const handleChange=(e) => setPaletteName(e.target.value)

    const handleDialogSubmit=() => handleSubmit(paletteName, emoji)

    const showEmoji=() => setStage('emoji')

    const selectEmoji=e => {
        setEmoji(e.native)
    }

    ValidatorForm.addValidationRule('isPaletteNameUnique', value => palettes.every(p => p.paletteName!==value))
    return (
        <div>
            <Button variant="contained" color='primary' onClick={handleClickOpen} sx={{ height: '55px', fontSize: '1.25em' }}>
                Save Palette
            </Button>
            {/* EMOJI DIALOG */}
            <Dialog open={stage==='emoji'}>
                <ValidatorForm onSubmit={handleDialogSubmit} style={{ width: '400px', textAlign: 'center' }}>
                    <DialogTitle>Create a new Palette</DialogTitle>
                    <DialogContent>
                        Select a new emoji
                        <EmojiPicker onEmojiSelect={selectEmoji} />
                    </DialogContent>
                    <DialogActions>
                        <Button color={'error'} variant='contained' onClick={handleClose} sx={{ width: '100%' }}>Cancel</Button>
                        <Button variant='contained' color='primary' type='submit' sx={{ width: '100%' }}>
                            <span>{emoji}</span> Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
            {/* FORM DIALOG */}
            <Dialog open={stage==='form'} onClose={handleClose}>
                <ValidatorForm onSubmit={showEmoji} style={{ width: '400px', textAlign: 'center' }}>
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
