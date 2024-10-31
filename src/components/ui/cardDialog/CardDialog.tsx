import React, {useState} from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    FormControl,
    InputLabel, Select, MenuItem, SelectChangeEvent
} from '@mui/material';
import {Character} from "../../../types/Character.ts";
import {charactersStore} from "../../../store/CharactersStore.ts";

interface CardDialogProps {
    open: boolean;
    onClose: () => void;
    character: Character;
}

const CardDialog: React.FC<CardDialogProps> = ({open, onClose, character}) => {
    const [editedCharacter, setEditedCharacter] = useState<Character>(character);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditedCharacter({...editedCharacter, [name]: value});
    };
    const handleSelectChange = (e: SelectChangeEvent) => {
        const {name, value} = e.target;
        setEditedCharacter({...editedCharacter, [name]: value});
    };


    const handleEditSubmit = () => {
        charactersStore.editCharacter(editedCharacter);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Character</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    name="name"
                    value={editedCharacter.name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Status</InputLabel>
                    <Select
                        label={"Status"}
                        name="status"
                        value={editedCharacter.status}
                        onChange={handleSelectChange}
                        variant={"outlined"}>
                        <MenuItem value="Alive">
                            Alive
                        </MenuItem>
                        <MenuItem value="Dead">
                            Dead
                        </MenuItem>
                        <MenuItem value="unknown">
                            Unknown
                        </MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    margin="dense"
                    label="Species"
                    name="species"
                    value={editedCharacter.species}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Location"
                    name="location"
                    value={editedCharacter.location.name}
                    onChange={(e) => setEditedCharacter({...editedCharacter, location: {name: e.target.value}})}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleEditSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CardDialog;