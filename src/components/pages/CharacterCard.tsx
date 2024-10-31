import styles from './CharacterCard.module.css';
import Status from "../ui/statusIcon/StatusIcon.tsx";
import {Character} from "../../types/Character.ts";
import Typography from "@mui/material/Typography";
import {Button, Grid2} from "@mui/material";
import {charactersStore} from "../../store/CharactersStore.ts";
import CardDialog from "../ui/cardDialog/CardDialog.tsx";
import {useState} from "react";
export const CharacterCard = (props: { character: Character}) => {
    const {character} = props;
    const [openDialog, setOpenDialog] = useState(false);

    const onDeleteButtonClick = (id: number) =>{
        console.log("DELETE" + id)
        charactersStore.removeCharacter(id)
    }
    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <div className={styles.card}>
            <img
                className={styles.cardMedia}
                src={character.image}
                alt={character.name}
            />
            <div className={styles.cardContent}>
                <Typography variant="h5" sx={{fontWeight: 'bold'}} className={styles.cardTitle}>
                    {character.name}
                </Typography>
                <Status status={character.status} species={character.species}/>
                <div className={styles.bottomText}>
                    <Typography sx={{fontSize: "18px", color: "rgb(158, 158, 158)"}}>
                        Last known location:
                    </Typography>
                    <Typography sx={{fontSize: "18px"}}>
                        {character.location.name}
                    </Typography>
                </div>
                <Grid2 container spacing={2} marginY={1}>
                    <Button variant={"outlined"} sx={{color: "gray", borderColor: "gray"}} size={"small"} className={styles.deleteButton} onClick={() => onDeleteButtonClick(character.id)}>Delete</Button>
                    <Button variant={"outlined"} sx={{color: "gray", borderColor: "gray"}} size={"small"} className={styles.editButton} onClick={() => handleDialogOpen()}>Edit</Button>
                </Grid2>
            </div>
            <CardDialog
                open={openDialog}
                onClose={handleDialogClose}
                character={character}
            />
        </div>
    );
};