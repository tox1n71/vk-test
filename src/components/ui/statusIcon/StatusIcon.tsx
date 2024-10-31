import styles from './Status.module.css';
import Typography from "@mui/material/Typography";

interface StatusProps {
    status: string;
    species: string;
}

const Status = ({ status, species }: StatusProps) => {
    const getStatusColor = () => {
        switch (status) {
            case "Alive":
                return "rgb(85, 204, 68)"
            case "Dead":
                return "red"
            case "unknown":
                return "rgb(158, 158, 158)"
        }
    };
    return (
        <span className={styles.status}>
            <span className={styles.statusIcon} style={{backgroundColor: getStatusColor()}}></span>
            <Typography>{status} - {species}</Typography>
        </span>
    );
};

export default Status;