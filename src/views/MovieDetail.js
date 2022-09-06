import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const { type } = useParams();

    const [movie, setMovie] = useState({});
    
    const fetchMovies = async () => {
        const { data } = await MoviesService.getInfoById(type, id);
        setMovie(data);
        console.log(data);
    }

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <div>
            <h1>{'title' in movie ? movie.title : movie.name}</h1>
            <article>{movie.overview}</article>
        </div>
    );
}