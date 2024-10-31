import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { CharacterCard } from "../../components/pages/CharacterCard.tsx";
import CircularProgress from '@mui/material/CircularProgress';
import { observer } from "mobx-react";
import { charactersStore } from "../../store/CharactersStore.ts";
import {Character} from "../../types/Character.ts";

export const CharactersList = observer(() => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchCharacters = async (page: number) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            const { info: { pages }, results } = json;
            setTotalPages(pages);

            const newCharacters = results.filter((result: Character) =>
                !charactersStore.characters.some(existing => existing.id === result.id)
            );

            charactersStore.characters = [...charactersStore.characters, ...newCharacters];
        } catch (error) {
            console.error("Failed to fetch characters:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await fetchCharacters(currentPage);
            setLoading(false);
        };

        fetchData().catch(error => {
            console.error("Failed to fetch characters:", error);
        });
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop
                !== document.documentElement.offsetHeight || loading || currentPage >= totalPages
            ) return;
            setCurrentPage((prev) => prev + 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, currentPage, totalPages]);

    return (
        <>
            <Grid container spacing={3} columnSpacing={3} justifyContent="center">
                {charactersStore.characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Grid>
            <CircularProgress sx={{ marginTop: 5 }} />
        </>
    );
});